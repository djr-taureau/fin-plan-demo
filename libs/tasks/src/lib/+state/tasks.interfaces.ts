import { LoadDataStatus, EntityState } from '@lifeworks/common';
import { TaskItem, TaskItems } from '../models';

/**
 * Interface for the 'Notes' data used in
 *  - NotesState, and
 *  - notesReducer
 */
export interface TasksData extends EntityState<TaskItem> {}

/**
 * Interface to the part of the Store containing NotesState
 * and other information related to NotesData.
 */
export interface TasksState {
	readonly tasks: TasksData;
}
