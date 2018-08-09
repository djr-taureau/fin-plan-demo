import { Action } from '@ngrx/store';
import { NotificationItems } from '../models';
import { IPaginationHeader } from '@lifeworks/common';

export enum NotificationsActionTypes {
	Load = '[Notifications] Load',
	LoadSuccess = '[Notifications] Load Success',
	LoadFailure = '[Notifications] Load Failure',
	Dismiss = '[Notifications] Dismiss',
	DismissSuccess = '[Notifications] Dismiss Success',
	DismissFailure = '[Notifications] Dismiss Failure',
}

export class Load implements Action {
	readonly type = NotificationsActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = NotificationsActionTypes.LoadSuccess;
	constructor(
		public payload: NotificationItems,
		public paging: IPaginationHeader
	) {}
}

export class LoadFailure implements Action {
	readonly type = NotificationsActionTypes.LoadFailure;
	constructor(public payload: Error) {}
}

export class Dismiss implements Action {
	readonly type = NotificationsActionTypes.Dismiss
	constructor(public payload: string) {}
}

export class DismissSuccess implements Action {
	readonly type = NotificationsActionTypes.DismissSuccess
	constructor(public payload: string) {}
}
export class DismissFailure implements Action {
	readonly type = NotificationsActionTypes.DismissFailure
	constructor(public payload: string) {}
}

export type NotificationsActions
	= Load
	| LoadSuccess
	| LoadFailure
	| Dismiss
	| DismissSuccess
	| DismissFailure;
