import { Action } from '@ngrx/store';
import { Tool } from '../../models';
import { IPaginationHeader } from '@lifeworks/common';

export enum ToolsActionTypes {
	Load = '[Tools] Load',
	LoadSuccess = '[Tools] Load Success',
	LoadFailure = '[Tools] Load Failure',
}

export class Load implements Action {
	readonly type = ToolsActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = ToolsActionTypes.LoadSuccess;
	constructor(
		public payload: Array<Tool>,
		public paging: IPaginationHeader
	) {}
}

export class LoadFailure implements Action {
	readonly type = ToolsActionTypes.LoadFailure;
	constructor(public payload: Error) {}
}


export type ToolsActions =
	| Load
	| LoadSuccess
	| LoadFailure;
