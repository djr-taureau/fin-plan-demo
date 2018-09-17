import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

import { PermissionsScope, PermissionItem } from '../models';
import { PermissionsState } from '../+state/permissions.interfaces';
import {
	isLoaded,
	allPermissions,
	allPermissionsCount,
} from '../+state/permissions.selectors';
import { Load, CreatePermission } from '../+state/permissions.actions';
import { InputOption } from '@lifeworks/common';

export const PERMISSION_SCOPES: Array<InputOption> =[
	{ value: PermissionsScope.Account, display: PermissionsScope[PermissionsScope.Account] },
	{ value: PermissionsScope.Firm, display: PermissionsScope[PermissionsScope.Firm] }
]

@Injectable({
	providedIn: 'root'
})
export class Permissions {
	private permissionScopes$ = of(PERMISSION_SCOPES);
	constructor(private store: Store<PermissionsState>) {}

	isDataLoaded() {
		return this.store.pipe(select(isLoaded));
	}

	load() {
		this.store.dispatch(new Load());
	}

	getAll() {
		return this.store.pipe(select(allPermissions));
	}

	countOfAll() {
		return this.store.pipe(select(allPermissionsCount));
	}

	getPermissionScopes() {
		return this.permissionScopes$
	}

	createPermission(item: PermissionItem) {
		this.store.dispatch(new CreatePermission(item));
	}
}
