import {
	NotificationsActions,
	NotificationsActionTypes
} from './notifications.actions';
import { LoadDataStatus } from '@lifeworks/common';
import { assoc, pipe, curry, map, when, propEq, identity } from 'ramda';
import { notificationsInitialState } from './notifications.init';
import { NotificationsData } from './notifications.interfaces';

const setDataStatus = status => assoc('status', status);
const setDataPaging = paging => assoc('paging', paging);
const setDataEntities = entities => assoc('entities', entities);

const setDataState = <T>(action) =>
	pipe<T, T, T, T>(
		setDataStatus(LoadDataStatus.loaded),
		setDataPaging(action.paging),
		setDataEntities(action.payload)
	);

const setDismissed = id => when(propEq('GUID', id), assoc('dismissed', true));

export function notificationsReducer(
	state = notificationsInitialState,
	action: NotificationsActions
): NotificationsData {
	switch (action.type) {
		case NotificationsActionTypes.Load:
			return setDataStatus(LoadDataStatus.loading)(state);

		case NotificationsActionTypes.LoadSuccess:
			return setDataState<NotificationsData>(action)(state);

		case NotificationsActionTypes.DismissSuccess:
			return assoc(
				'entities',
				map(setDismissed(action.payload), state.entities),
				state
			);

		default:
			return state;
	}
}
