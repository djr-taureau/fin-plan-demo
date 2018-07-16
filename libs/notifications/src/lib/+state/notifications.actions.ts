import { Action } from '@ngrx/store';

export enum NotificationsActionTypes {
  NotificationsAction = '[Notifications] Action',
  LoadNotifications = '[Notifications] Load Data',
  NotificationsLoaded = '[Notifications] Data Loaded'
}

export class Notifications implements Action {
  readonly type = NotificationsActionTypes.NotificationsAction;
}
export class LoadNotifications implements Action {
  readonly type = NotificationsActionTypes.LoadNotifications;
  constructor(public payload: any) {}
}

export class NotificationsLoaded implements Action {
  readonly type = NotificationsActionTypes.NotificationsLoaded;
  constructor(public payload: any) {}
}

export type NotificationsActions =
  | Notifications
  | LoadNotifications
  | NotificationsLoaded;
