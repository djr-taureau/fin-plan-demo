import { LoadDataStatus, IPaginationHeader } from '@lifeworks/common';
import { NotificationItems, NotificationsItem } from '../models';

/**
 * Interface for the 'Notifications' data used in
 *  - NotificationsState, and
 *  - notificationsReducer
 */
export interface NotificationsData {
	status: LoadDataStatus;
	entities: NotificationItems;
	paging: IPaginationHeader;
}

/**
 * Interface to the part of the Store containing NotificationsState
 * and other information related to NotificationsData.
 */
export interface NotificationsState {
	readonly notifications: NotificationsData;
}
