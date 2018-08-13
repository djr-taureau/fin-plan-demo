import {
	setLoadingState,
	setEntityProp,
	setDataState
} from '@lifeworks/common';
import {
	NotificationsActions,
	NotificationsActionTypes
} from './notifications.actions';
import { notificationsInitialState } from './notifications.init';
import { NotificationsData } from './notifications.interfaces';

const setDismissed = setEntityProp('dismissed');
const setRemoving = setEntityProp('_ui_isRemoving');

export function notificationsReducer(
	state = notificationsInitialState,
	action: NotificationsActions
): NotificationsData {
	switch (action.type) {
		case NotificationsActionTypes.Load:
			return setLoadingState(state);

		case NotificationsActionTypes.LoadSuccess:
			return setDataState(action.payload, state);

		case NotificationsActionTypes.Dismiss:
			return setRemoving(action.payload, true, state);

		case NotificationsActionTypes.DismissFailure:
			return setRemoving(action.payload, false, state);

		case NotificationsActionTypes.DismissSuccess:
			return setDismissed(action.payload, true, state);

		default:
			return state;
	}
}
