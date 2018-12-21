import { Entity, Column } from "typeorm";
import { EntityContext, TrackedBaseEntity} from "../../common";
import { EventParticipant, EventParticipation } from './event-participant.entity';
import { EventCategory } from './events-category';

@Entity('events')
export class Event extends TrackedBaseEntity {

  @Column()
  startTime: Date;

  @Column('int')
  duration: number; //seconds

  @Column()
  title: string;

  @Column({
    type: 'nvarchar',
    length: 'MAX',
    nullable: true
  })
  body?: string;

  @Column(type => EntityContext)
  context: EntityContext;

}

export class EventWithParticipants extends Event {
  participants?: EventParticipant[];
  participation?: EventParticipation[];
}

export class MeetingEvent extends EventWithParticipants {
  location?: string;
  url?: string;
  category?: EventCategory;
}