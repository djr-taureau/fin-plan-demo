import { EventParticapant } from './../../../../../microservices/libs/services/common/event-data';
import { EntityContext } from './../../../../../microservices/libs/domain-entities'
import { Obj, DomainEntity } from '@lifeworks/common';

export type EventItems = Array<EventItem>;

export interface EventItem extends DomainEntity, IRemoveable {
  guid: string;
  reminderNotes?: string;
  startTime?: Date;
  dueDate?: Date;
  duration?: number;
  title?: string;
  description?: string;
  reminderTime?: string;
  status: string;
	dismissed: boolean;
	eventType: string;
  assignedTo: EventParticapant;
  context: EntityContext;
  timestamps: {
    createdOn: Date;
    modifiedOn: Date;
  }
}

export interface IRemoveable {
	_ui_isRemoving?: boolean;
}
