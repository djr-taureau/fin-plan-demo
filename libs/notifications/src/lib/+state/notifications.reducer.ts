import {
	NotificationsActions,
	NotificationsActionTypes
} from './notifications.actions';
import { NotificationsItemCollection } from '../models';
import { LoadDataStatus, IPaginationHeader } from '@lifeworks/common';
import { assoc } from 'ramda';

/**
 * Interface for the 'Notifications' data used in
 *  - NotificationsState, and
 *  - notificationsReducer
 */
export interface NotificationsData {
	status: LoadDataStatus;
	entities: NotificationsItemCollection;
	paging: IPaginationHeader;
}

/**
 * Interface to the part of the Store containing NotificationsState
 * and other information related to NotificationsData.
 */
export interface NotificationsState {
	readonly notifications: NotificationsData;
}

export const initialState: NotificationsData = {
	status: LoadDataStatus.initial,
	entities: [
		{
			GUID: '1',
			occurence: new Date(),
			message: 'test',
			status: 'test',
			dismissed: false,
			target: {},
			source: {},
			event: {}
		}
	],
	paging: {
		totalRecords: 0,
		totalReturned: 0,
		originalRequest: { offset: 0, limit: 0 }
	}
};
export function notificationsReducer(
	state = initialState,
	action: NotificationsActions
): NotificationsData {
	switch (action.type) {
		case NotificationsActionTypes.Load:
			return assoc('status', LoadDataStatus.loading, state);

		case NotificationsActionTypes.LoadSuccess:
			return assoc(
				'entities',
				action.payload,
				assoc(
					'status',
					LoadDataStatus.loaded,
					assoc('paging', action.paging, state)
				)
			);

		default:
			return state;
	}
}
