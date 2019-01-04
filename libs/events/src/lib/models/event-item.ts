import { Obj, DomainEntity, DomainSubject } from '@lifeworks/common';

export type EventItems = Array<EventItem>;

export interface EventItem extends DomainEntity, IRemoveable {
  title: string;
	dismissed: boolean;
	eventType: string;
	target: DomainSubject;
	source?: DomainSubject;
	subject?: DomainSubject;
}

export interface IRemoveable {
	_ui_isRemoving?: boolean;
}
