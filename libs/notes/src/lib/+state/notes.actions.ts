import { Action } from '@ngrx/store';
import { NoteItems } from '../models';
import { IPaginationHeader } from '@lifeworks/common';

export enum NotesActionTypes {
	Load = '[Notes] Load',
	LoadSuccess = '[Notes] Load Success',
	LoadFailure = '[Notes] Load Failure',
	Dismiss = '[Notes] Dismiss',
	DismissSuccess = '[Notes] Dismiss Success',
	DismissFailure = '[Notes] Dismiss Failure'
}

export class Load implements Action {
	readonly type = NotesActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = NotesActionTypes.LoadSuccess;
	constructor(
		public payload: NoteItems,
		public paging: IPaginationHeader
	) {}
}

export class LoadFailure implements Action {
	readonly type = NotesActionTypes.LoadFailure;
	constructor(public payload: Error) {}
}

export class Dismiss implements Action {
	readonly type = NotesActionTypes.Dismiss;
	constructor(public payload: string) {}
}

export class DismissSuccess implements Action {
	readonly type = NotesActionTypes.DismissSuccess;
	constructor(public payload: string) {}
}
export class DismissFailure implements Action {
	readonly type = NotesActionTypes.DismissFailure;
	constructor(public payload: string) {}
}

export type NotesActions =
	| Load
	| LoadSuccess
	| LoadFailure
	| Dismiss
	| DismissSuccess
	| DismissFailure;
