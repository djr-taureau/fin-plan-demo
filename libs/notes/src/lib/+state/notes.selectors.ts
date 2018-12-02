import { createFeatureSelector, createSelector } from '@ngrx/store';
import { prop, propOr, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus, isTrue, isFalse } from '@lifeworks/common';

import { NotesData } from './notes.interfaces';
import { NoteItem, NoteItems } from '../models';

const NotesState = createFeatureSelector<NotesData>(
	'Notes'
);

const ENTITIES_PROPERTY = prop('entities');
const STATUS_PROPERTY = propOr('status', '');
const IS_DISMISSED = propEq('dismissed', true);
const IS_NOT_DISMISSED = propEq('dismissed', false);
const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

const dataStatus = createSelector(NotesState, STATUS_PROPERTY);

export const isLoaded = createSelector(NotesState, IS_LOADED);
export const isLoading = createSelector(NotesState, IS_LOADING);

export const allNotes = createSelector(
	NotesState,
	pipe(ENTITIES_PROPERTY, values)
);

export const allNotesCount = createSelector(allNotes, length);

export const undismissedNotes = createSelector(allNotes, x =>
	x.filter(IS_NOT_DISMISSED)
);

export const undismissedCount = createSelector(
	undismissedNotes,
	length
);

export const dismissedNotes = createSelector(allNotes, x =>
	x.filter(IS_DISMISSED)
);

export const dismissedCount = createSelector(dismissedNotes, length);

export const filterNotes = filter =>
	createSelector(allNotes, x => x.filter(IS_DISMISSED));

export const filterCount = filter =>
	createSelector(filterNotes(filter), length);
