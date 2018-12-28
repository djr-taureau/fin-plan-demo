import {
	setLoadingState,
	setEntityProp,
	setDataState
} from '@lifeworks/common';
import {
	TasksActions,
	TasksActionTypes
} from './tasks.actions';
import { tasksInitialState } from './tasks.init';
import { TasksData } from './tasks.interfaces';

const setDismissed = setEntityProp('dismissed');
const setRemoving = setEntityProp('_ui_isRemoving');

export function tasksReducer(
	state = tasksInitialState,
	action: TasksActions
): TasksData {
	switch (action.type) {
		case TasksActionTypes.Load:
			return setLoadingState(state);

		case TasksActionTypes.LoadSuccess:
			return setDataState(action.payload, state);

		case TasksActionTypes.Dismiss:
			return setRemoving(action.payload, true, state);

		case TasksActionTypes.DismissFailure:
			return setRemoving(action.payload, false, state);

		case TasksActionTypes.DismissSuccess:
			return setDismissed(action.payload, true, state);

		default:
			return state;
	}
}
