import { Action } from '@ngrx/store';
import { EventItems } from '../models';
import { IPaginationHeader } from '@lifeworks/common';

export enum EventsActionTypes {
	Load = '[Events] Load',
	LoadSuccess = '[Events] Load Success',
	LoadFailure = '[Events] Load Failure',
	Dismiss = '[Events] Dismiss',
	DismissSuccess = '[Events] Dismiss Success',
	DismissFailure = '[Events] Dismiss Failure'
}

export class Load implements Action {
	readonly type = EventsActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = EventsActionTypes.LoadSuccess;
	constructor(
		public payload: EventItems,
		public paging: IPaginationHeader
	) {}
}

export class LoadFailure implements Action {
	readonly type = EventsActionTypes.LoadFailure;
	constructor(public payload: Error) {}
}

export class Dismiss implements Action {
	readonly type = EventsActionTypes.Dismiss;
	constructor(public payload: string) {}
}

export class DismissSuccess implements Action {
	readonly type = EventsActionTypes.DismissSuccess;
	constructor(public payload: string) {}
}
export class DismissFailure implements Action {
	readonly type = EventsActionTypes.DismissFailure;
	constructor(public payload: string) {}
}

export type EventsActions =
	| Load
	| LoadSuccess
	| LoadFailure
	| Dismiss
	| DismissSuccess
	| DismissFailure;
