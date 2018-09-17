import { Action } from '@ngrx/store';
import { ClientItems, ClientItem } from '../models';
import { IPaginationHeader } from '@lifeworks/common';

export enum ClientsActionTypes {
	Load = '[Clients] Load',
	LoadSuccess = '[Clients] Load Success',
	LoadFailure = '[Clients] Load Failure',
}

export class Load implements Action {
	readonly type = ClientsActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = ClientsActionTypes.LoadSuccess;
	constructor(
		public payload: ClientItems,
		public paging: IPaginationHeader
	) {}
}

export class LoadFailure implements Action {
	readonly type = ClientsActionTypes.LoadFailure;
	constructor(public payload: Error) {}
}


export type ClientsActions =
	| Load
	| LoadSuccess
	| LoadFailure;
