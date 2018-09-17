import { Action } from '@ngrx/store';
import { PermissionItems, PermissionItem } from '../models';
import { IPaginationHeader } from '@lifeworks/common';

export enum PermissionsActionTypes {
	Load = '[Permissions] Load',
	LoadSuccess = '[Permissions] Load Success',
	LoadFailure = '[Permissions] Load Failure',
	CreatePermission = '[Permissions] Create Permission',
	CreatePermissionSuccess = '[Permissions] Create Permission Success',
	CreatePermissionFailure = '[Permissions] Create Permission Failure',
}

export class Load implements Action {
	readonly type = PermissionsActionTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = PermissionsActionTypes.LoadSuccess;
	constructor(
		public payload: PermissionItems,
		public paging: IPaginationHeader
	) {}
}

export class LoadFailure implements Action {
	readonly type = PermissionsActionTypes.LoadFailure;
	constructor(public payload: Error) {}
}

export class CreatePermission implements Action {
	readonly type = PermissionsActionTypes.CreatePermission;
	constructor(public payload: PermissionItem) {}
}

export class CreatePermissionSuccess implements Action {
	readonly type = PermissionsActionTypes.CreatePermissionSuccess;
	constructor(public payload: PermissionItem) {}
}

export class CreatePermissionFailure implements Action {
	readonly type = PermissionsActionTypes.CreatePermissionFailure;
	constructor(public payload: Error) {}
}

export type PermissionsActions =
	| Load
	| LoadSuccess
	| LoadFailure
	| CreatePermission
	| CreatePermissionSuccess
	| CreatePermissionFailure;
