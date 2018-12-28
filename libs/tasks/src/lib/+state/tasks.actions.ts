import { Action } from '@ngrx/store';
import { TaskItems } from '../models';
import { IPaginationHeader } from '@lifeworks/common';

export enum TasksActionTypes {
	Load = '[Tasks] Load',
	LoadSuccess = '[Tasks] Load Success',
	LoadFailure = '[Tasks] Load Failure',
	Dismiss = '[Tasks] Dismiss',
	DismissSuccess = '[Tasks] Dismiss Success',
	DismissFailure = '[Tasks] Dismiss Failure'
}

export class Load implements Action {
	readonly type = TasksActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = TasksActionTypes.LoadSuccess;
	constructor(
		public payload: TaskItems,
		public paging: IPaginationHeader
	) {}
}

export class LoadFailure implements Action {
	readonly type = TasksActionTypes.LoadFailure;
	constructor(public payload: Error) {}
}

export class Dismiss implements Action {
	readonly type = TasksActionTypes.Dismiss;
	constructor(public payload: string) {}
}

export class DismissSuccess implements Action {
	readonly type = TasksActionTypes.DismissSuccess;
	constructor(public payload: string) {}
}
export class DismissFailure implements Action {
	readonly type = TasksActionTypes.DismissFailure;
	constructor(public payload: string) {}
}

export type TasksActions =
	| Load
	| LoadSuccess
	| LoadFailure
	| Dismiss
	| DismissSuccess
	| DismissFailure;
