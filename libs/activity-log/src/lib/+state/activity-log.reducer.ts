import {
	ActivityLogActions,
	ActivityLogActionTypes
} from './activity-log.actions';
import { ActivityLogItemCollection } from '../models';
import { LoadDataStatus, IPaginationHeader } from '@lifeworks/common';
import { assoc } from 'ramda';

/**
 * Interface for the 'ActivityLog' data used in
 *  - ActivityLogState, and
 *  - activityLogReducer
 */
export interface ActivityLogData {
	status: LoadDataStatus;
	entities: ActivityLogItemCollection;
	paging?: IPaginationHeader;
}

/**
 * Interface to the part of the Store containing ActivityLogState
 * and other information related to ActivityLogData.
 */
export interface ActivityLogState {
	readonly activityLog: ActivityLogData;
}

export const initialState: ActivityLogData = {
	status: LoadDataStatus.initial,
	entities: [
		{
			id: 1,
			message: 'test',
			source: 'string',
			occurence: new Date(),
			type: 'Actionable',
			subject: 'client',
			action: {}
		}
	]
};

export function activityLogReducer(
	state = initialState,
	action: ActivityLogActions
): ActivityLogData {
	switch (action.type) {
		case ActivityLogActionTypes.Load:
			return assoc('status', LoadDataStatus.loading, state);

		case ActivityLogActionTypes.LoadSuccess:
			return assoc(
				'entities',
				action.payload,
				assoc(
					'status',
					LoadDataStatus.loaded,
					assoc('paging', action.paging, state)
				)
			);

		case ActivityLogActionTypes.LoadFail:
			return assoc(
				'entities',
				[],
				assoc('status', LoadDataStatus.error, state)
			);

		default:
			return state;
	}
}
