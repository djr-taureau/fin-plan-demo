import { Action } from '@ngrx/store';
import {
  NotificationsActions,
  NotificationsActionTypes
} from './notifications.actions';

/**
 * Interface for the 'Notifications' data used in
 *  - NotificationsState, and
 *  - notificationsReducer
 */
export interface NotificationsData {}

/**
 * Interface to the part of the Store containing NotificationsState
 * and other information related to NotificationsData.
 */
export interface NotificationsState {
  readonly notifications: NotificationsData;
}

export const initialState: NotificationsData = {};

export function notificationsReducer(
  state = initialState,
  action: NotificationsActions
): NotificationsData {
  switch (action.type) {
    case NotificationsActionTypes.NotificationsAction:
      return state;

    case NotificationsActionTypes.NotificationsLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
