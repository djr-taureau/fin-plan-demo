import { Action } from '@ngrx/store';
import { NotificationsItemCollection } from '../models';
import { IPaginationHeader } from '@lifeworks/core';

export enum NotificationsActionTypes {
	Load = '[Notifications] Load',
	LoadSuccess = '[Notifications] Load Success',
	LoadFail = '[Notifications] Load Fail'
}

export class Load implements Action {
	readonly type = NotificationsActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = NotificationsActionTypes.LoadSuccess;
	constructor(
		public payload: NotificationsItemCollection,
		public paging: IPaginationHeader
	) {}
}

export class LoadFail implements Action {
	readonly type = NotificationsActionTypes.LoadFail;
	constructor(public payload: Error) {}
}

export type NotificationsActions = Load | LoadSuccess | LoadFail;
