import {
	setLoadingState,
	setEntityProp,
	setDataState
} from '@lifeworks/common';
import {
	EventsActions,
	EventsActionTypes
} from './events.actions';
import { eventsInitialState } from './events.init';
import { EventsData } from './events.interfaces';

const setDismissed = setEntityProp('dismissed');
const setRemoving = setEntityProp('_ui_isRemoving');

export function eventsReducer(
	state = eventsInitialState,
	action: EventsActions
): EventsData {
	switch (action.type) {
		case EventsActionTypes.Load:
			return setLoadingState(state);

		case EventsActionTypes.LoadSuccess:
			return setDataState(action.payload, state);

		case EventsActionTypes.Dismiss:
			return setRemoving(action.payload, true, state);

		case EventsActionTypes.DismissFailure:
			return setRemoving(action.payload, false, state);

		case EventsActionTypes.DismissSuccess:
			return setDismissed(action.payload, true, state);

		default:
			return state;
	}
}
