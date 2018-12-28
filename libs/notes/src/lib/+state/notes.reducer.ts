import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  LoadDataStatus, setLoadingState, setDataState,
} from '@lifeworks/common';

import {
	NotesActions,
	NotesActionTypes
} from './notes.actions';

import { NoteItem } from '../models';

export interface NotesState extends EntityState<NoteItem> {
  selectedNoteId: string | null;
}

export const adapter: EntityAdapter<NoteItem> = createEntityAdapter<NoteItem>({
  selectId: (note: NoteItem) => note.guid,
  sortComparer: false,
});

export const notesInitialState: NotesState = adapter.getInitialState({
  status: LoadDataStatus.initial,
  ids: [],
  selectedNoteId: null,
});

export function notesReducer(
	state = notesInitialState,
	action: NotesActions
): NotesState {
	switch (action.type) {

    case NotesActionTypes.Select: {
      return Object.assign({}, state, { selectedNoteId: action.payload });
    }
		case NotesActionTypes.LoadSuccess:
      return adapter.addAll(action.payload, state);

    case NotesActionTypes.AddSuccess:
      return adapter.addOne(action.payload, state);

		case NotesActionTypes.UpdateSuccess:
			return adapter.upsertOne(action.payload, state);

		default:
			return state;
	}
}

export const getSelectedId = (state: NotesState) => state.selectedNoteId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectNoteIds = selectIds;

export const selectNoteEntities = selectEntities;

export const selectAllNotes = selectAll;

export const selectNoteTotal = selectTotal;

