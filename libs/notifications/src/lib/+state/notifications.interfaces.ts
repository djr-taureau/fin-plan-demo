import { LoadDataStatus, EntityState } from '@lifeworks/common';
import { NotificationItem, NotificationItems } from '../models';

/**
 * Interface for the 'Notifications' data used in
 *  - NotificationsState, and
 *  - notificationsReducer
 */
export interface NotificationsData extends EntityState<NotificationItem> {}

/**
 * Interface to the part of the Store containing NotificationsState
 * and other information related to NotificationsData.
 */
export interface NotificationsState {
	readonly notifications: NotificationsData;
}
