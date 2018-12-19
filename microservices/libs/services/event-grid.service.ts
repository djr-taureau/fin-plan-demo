import { EventGridClient } from 'azure-eventgrid';
import { TopicCredentials } from 'ms-rest-azure';
import { v4 as uuid } from 'uuid'; 

export class EventGridService {

  /**
   * 
   * @param eventKey an event topic key
   * @param eventHostName the endpoint the event is found
   * @param eventName the subject of the event. This will also be used for the eventType property with Event appended to the end.
   * @param eventData data to be passed to the subscribers via the event emitter
   */
  async emitEvent(eventKey:string, eventHostName:string, eventName:string, eventData:object) {
    const topicCreds = new TopicCredentials(eventKey);
    const EGClient = new EventGridClient(topicCreds);
    const topicHostname = eventHostName;
    const events = [
      {
        id: uuid(),
        subject: eventName,
        dataVersion: '1.0',
        eventType: `${eventName}Event`,
        eventTime: new Date(),
        data: {
          ...eventData
        }
      }
  ];

  return await EGClient.publishEvents(topicHostname, events);
  }
}