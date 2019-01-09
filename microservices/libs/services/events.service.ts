import { map, is, omit, keys, without, isEmpty, merge } from 'ramda';
import { getCustomRepository } from "typeorm";
import { EventRepository, GetEventsQueryOptions } from '../repositories';
import { setValueFrom } from '../function-utilities';
import {
  EntityContext,
  ValueType,
  Event,
  EntityScope,
  Participant } from '../domain-entities';
import { format } from "date-fns";

// services
import { ContentService } from './content.service';
import { TemplatesService } from './templates.service';
import { MailService } from './mail.service';
import { AttributeService } from "./attribute.service";

import { createEvent } from 'ics';




const formEventInvite = a => {
  return Object.assign(new Participant(), {
    name: a.participationId.name,
    email: a.participationId.email
  });
}

const base = [
  'guid',
  'createdOn',
  'modifiedOn',
  'startTime',
  'title',
  'body',
];

export class EventsService {
  private eventRepo = getCustomRepository(EventRepository);
  private contentService = new ContentService();
  private templatesService = new TemplatesService();
  private mailService = new MailService();
  private attributeService = new AttributeService();

  /**
   *
   * @param event type: MeetingEvent
   */
  private generateIcs(event) {
    //Filter startTime and add prop event.start
    const start = [
      format(event.startTime, 'YYYY'),
      format(event.startTime, 'M'),
      format(event.startTime, 'D'),
      format(event.startTime, 'h'),
      format(event.startTime, 'm'),
    ];

    const hours = event.duration / 60 / 60;
    const time = hours.toString().split('.');

    //Filter Props
    event.duration = {
      hours: time[0],
      minutes: (time.length > 1) ? time[1] : '0'
    }

    event['uid'] = `${event.guid}-LIFEWORKS`;
    event['start'] = start;
    event['description'] = event.body;
    event['attendees'] = map(formEventInvite, event.participants);
    event['organizer'] = map(formEventInvite, event.organizer)[0]; //EventParticipant;

    //Remove invalid props
    const formatted = omit([
      'context',
      'createdOn',
      'modifiedOn',
      'guid',
      'startTime',
      'body',
      'participants',
      'participation',
      'category'
    ], event);

    // Call ICS package
    const { error, value } = createEvent(formatted);

    if (error) {
      console.log(error);
      throw new Error('ics generation failed');
    } else {
      return value;
    }
  }

  /**
   * Converts JSON data to string to save to db
   * If updating an existing event entityContext becomes optional because an existing context should be specified
   *
   * @param params event object
   * @param entityContext EntityContext
   */
  private processEventForDB(params, entityContext?:EntityContext) {

    let context;
    if(entityContext) {
      context = {
        scope: entityContext.scope,
        entity: entityContext.entity
      }
    } else {
      context = params.context
    }

    const convertValues = n => {
      if((is(Object, n) || is(Array, n)) && !is(Date, n)) {
        return setValueFrom(ValueType.Object, n);
      } else {
        return n;
      }
    }

    const event = map(convertValues, params);


    return Object.assign(new Event(), {
      ...event,
      context
    });
  }


  /**
   *
   * @param entityContext:EntityContext
   * @param params
   ```
   params = {
     startTime: Date,
     duration: number, //seconds
     title: string,
     body?: string,
   }
   ```
   */
  async createEvent(entityContext:EntityContext, params) {

    const events = await this.processEventForDB({
      startTime: params.startTime,
      title: params.title,
      body: (params.body !== undefined) ? params.body : null
    }, entityContext);

    const event = await this.eventRepo.saveEvent(events);

    //remove base keys to determine if extra attributes exist
    const attributeKeys = without(base, keys(params));
    let attributes = {}
    if(!isEmpty(attributeKeys)) {
      attributes = await this.attributeService.saveAttributes({
        scope: 6,
        entity: event['guid']
      }, {
        ...omit(base, params)
      });
    }
<<<<<<< HEAD
    
    const formedEvent = merge(event, attributes);
=======

    const formedEvent = merge(event, attributes)
>>>>>>> working on dismiss tasks
    const mail = await this.mailEventInvites({guid: formedEvent['guid']});
    const message = {
      ...formedEvent,
      subject: "NewEventCreated",
      entityGuid: entityContext.entity
    }
    return {
      formedEvent,
      mail,
      message
    }
  }


  /**
   *
   * @param params
   * @param body Event | Event + Attributes
   ```
   params = {
     guid: string
   }
   ```
   */
  async updateEvent(params, body) {
    const event = await this.getEvent({guid: params.guid}, {excludeAttributes: true});
    const attributeKeys = without(base, keys(body));
    const baseEventUpdates = omit(attributeKeys as any, body);

    const events = this.processEventForDB({
      ...event,
      ...baseEventUpdates
    });

    await this.eventRepo.saveEvent(events);

    if(!isEmpty(attributeKeys)) {
      await this.attributeService.updateAttributes({
        scope: 6,
        entity: event['guid']
      }, {
        ...omit(base, body)
      });
    }

    return await this.getEvent({guid: params.guid});
  }


  /**
   *
   * @param params
   ```
   params = {
     guid: string
   }
   ```
   */
  async getEvent(params, options = { excludeAttributes: false }) {
    try {
      const event = await this.eventRepo.getEvent(params.guid);

      if(options.excludeAttributes) {
        return event;
      } else {
        const attributes = await this.attributeService.getAttributes({
          scope: EntityScope.Event,
          entity: event.guid
        });

        return {...event, ...attributes};
      }


    } catch(err) {
      return err;
    }
  }


  /**
   *
   * @param entityContext: EntityContext
   *
   */
  async getEvents(entityContext:EntityContext, options?:GetEventsQueryOptions) {
    try {
      const events = await this.eventRepo.getEvents(entityContext, options);
      return events;
    } catch(err) {
      return err;
    }
  }


  /**
   *
   * @param params
   ```
   params = {
     guid: string
   }
   ```
   */
  async mailEventInvites(params) {
    console.log('mail');
    try {
      const event = await this.getEvent(params);
      const mailEvent = {
        ...event,
        attendees: map(formEventInvite, event.participants),
        organizer: map(formEventInvite, event.organizer)[0],
        description: event.body
      };
      const ics = Buffer.from(this.generateIcs(event)).toString('base64');
      
      const mail = await this.mailService.systemEmailTemplate({
        to: mailEvent['attendees'],
        from: mailEvent['organizer'],
        subject: `Invite: ${mailEvent['title']}`,
        attachments: [
          {
            content: ics,
            filename: 'event-invite.ics',
            type: 'text/calendar'
          }
        ]
      }, 'email/eventInvite.html', {...mailEvent});

      return mail;

    } catch(err) {
      return err;
    }
  }


  /**
   *
   * @param params
   ```
   params = {
     guid: string
   }
   ```
   */
  async downloadIcs(params) {
    try {
      const event = await this.getEvent(params);
      const ics = this.generateIcs(event);
      const response = {
        body: this.contentService.createBuffer('event.ics', ics),
        status: 200,
        headers: {
          "content-type": "text/calendar",
          "content-length": ics.length
        }
      }
      return response;

    } catch(err) {
      return err;
    }
  }
}
