import { Obj, DomainEntity, DomainSubject } from '@lifeworks/common';

export type NotificationItems = Array<NotificationItem>;

export interface NotificationItem extends DomainEntity, IRemoveable {
	message: string;
	dismissed: boolean;
	notificationType: string;
	target: DomainSubject;
	source?: DomainSubject;
	subject?: DomainSubject;
}

export interface IRemoveable {
	_ui_isRemoving?: boolean;
}
