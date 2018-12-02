import {
	setLoadingState,
	setEntityProp,
	setDataState
} from '@lifeworks/common';
import {
	NotesActions,
	NotesActionTypes
} from './notes.actions';
import { notesInitialState } from './notes.init';
import { NotesData } from './notes.interfaces';

const setDismissed = setEntityProp('dismissed');
const setRemoving = setEntityProp('_ui_isRemoving');

export function notesReducer(
	state = notesInitialState,
	action: NotesActions
): NotesData {
	switch (action.type) {
		case NotesActionTypes.Load:
			return setLoadingState(state);

		case NotesActionTypes.LoadSuccess:
			return setDataState(action.payload, state);

		case NotesActionTypes.Dismiss:
			return setRemoving(action.payload, true, state);

		case NotesActionTypes.DismissFailure:
			return setRemoving(action.payload, false, state);

		case NotesActionTypes.DismissSuccess:
			return setDismissed(action.payload, true, state);

		default:
			return state;
	}
}
