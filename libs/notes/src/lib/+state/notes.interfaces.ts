import { LoadDataStatus, EntityState } from '@lifeworks/common';
import { NoteItem, NoteItems } from '../models';

/**
 * Interface for the 'Notes' data used in
 *  - NotesState, and
 *  - notesReducer
 */
export interface NotesData extends EntityState<NoteItem> {}

/**
 * Interface to the part of the Store containing NotesState
 * and other information related to NotesData.
 */
export interface NotesState {
	readonly notes: NotesData;
}
