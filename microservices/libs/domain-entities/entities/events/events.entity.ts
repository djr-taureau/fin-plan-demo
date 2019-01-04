import { Entity, Column } from "typeorm";
import { EntityContext, TrackedBaseEntity} from "../../common";
import { EventParticipant, EventParticipation } from './event-participant.entity';
import { EventCategory } from './events-category';

@Entity('events')
export class Event extends TrackedBaseEntity {

  @Column()
  title: string;

  @Column({nullable: true})
  startTime?: Date

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
  startTime: Date;
  duration: number; //seconds
  organizer: EventParticipant;
  location?: string;
  url?: string;
  category?: EventCategory;
}

export class TaskEvent extends Event {
  assignedTo?: EventParticipant;
  dueDate?: Date;
  description: string;
  attachments?: string;
  dismissed: boolean;
  taskType: string;
}
