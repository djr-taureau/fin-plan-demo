import { EventParticapant } from './../../../../../microservices/libs/services/common/event-data';
import { Obj, DomainEntity } from '@lifeworks/common';

export type EventItems = Array<EventItem>;

export interface EventItem extends DomainEntity, IRemoveable {
  guid: string;
  startTime: Date;
  dueDate?: Date;
  duration: number;
  title: string;
  description: string;
  status: string;
	dismissed: boolean;
	eventType: string;
  assignedTo: EventParticapant;
  timestamps: {
    createdOn: Date;
    modifiedOn: Date;
  }
}

export interface IRemoveable {
	_ui_isRemoving?: boolean;
}
