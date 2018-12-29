import { createFeatureSelector, createSelector, ActionReducerMap, } from '@ngrx/store';
import { prop, propOr, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus, isTrue, isFalse } from '@lifeworks/common';
import * as fromNotes from './notes.reducer';
import { NoteItem } from '../models';

export interface AppState {
  notes: fromNotes.NotesState,
}

export const reducers: ActionReducerMap<AppState> = {
  notes: fromNotes.notesReducer,
};

const selectNotesState = createFeatureSelector<fromNotes.NotesState>('notes');

export const selectNoteIds = createSelector(
  selectNotesState,
  fromNotes.selectNoteIds
);
export const selectNoteEntities = createSelector(
  selectNotesState,
  fromNotes.selectNoteEntities
);
export const selectAllNotes = createSelector(
  selectNotesState,
  fromNotes.selectAllNotes
);
export const selectNoteTotal = createSelector(
  selectNotesState,
  fromNotes.selectNoteTotal
);
export const selectCurrentNoteId = createSelector(
  selectNotesState,
  fromNotes.getSelectedId
);

export const selectCurrentNote = createSelector(
  selectNoteEntities,
  selectCurrentNoteId,
  (noteEntities, noteId) => {
    return noteEntities[noteId]
  }
);



const STATUS_PROPERTY = propOr('status', '');

const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

const dataStatus = createSelector(selectNotesState, STATUS_PROPERTY);

export const isLoaded = createSelector(selectNotesState, IS_LOADED);
export const isLoading = createSelector(selectNotesState, IS_LOADING);


