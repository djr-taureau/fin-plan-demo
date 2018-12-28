import {
	createFeatureSelector,
	createSelector,
	ActionReducerMap
} from '@ngrx/store';
import { prop, propOr, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus, isTrue, isFalse } from '@lifeworks/common';
import * as fromNotes from './notes.reducer';
import { NoteItem } from '../models';

export interface AppState {
	notes: fromNotes.NotesState;
}

export const reducers: ActionReducerMap<AppState> = {
	notes: fromNotes.notesReducer
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
		const emptyNote = {
			guid: '12fee20-6107-4ae4-aea4-8cce1951691e',
			name: 'This is a test note',
			note: 'Body Content of the Note',
			relatedEntityGuid: '678fc1cf-bbe9-4748-958d-f3881008c5c2',
			reminderDate: '2018-12-10 22:44:39.7500000',
			entityContext: 1,
			owner: {
				guid: 'bb53a896-1dcc-457c-9619-8a6a0dbe30a2',
				displayName: 'Walter White',
				entityType: 'Client'
			},
			createdBy: 'userString',
			reminderTime: '2018-12-10 22:44:39.7500000',
			timestamps: {
				modifiedOn: 'datestring',
				createdOn: 'userString'
			}
		};
		return noteId ? noteEntities[noteId] : emptyNote;
	}
);

const STATUS_PROPERTY = propOr('status', '');

const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

const dataStatus = createSelector(selectNotesState, STATUS_PROPERTY);

export const isLoaded = createSelector(selectNotesState, IS_LOADED);
export const isLoading = createSelector(selectNotesState, IS_LOADING);
