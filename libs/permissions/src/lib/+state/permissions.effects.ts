import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { omit } from 'ramda';

import {
	PermissionsActions,
	PermissionsActionTypes,
	Load,
	LoadSuccess,
	LoadFailure,
	CreatePermission,
	CreatePermissionSuccess,
	CreatePermissionFailure
} from './permissions.actions';
import { PermissionsState } from './permissions.interfaces';
import { PermissionsApi } from '../services/permissions-api.service';
import { createPaginationSuccessAction } from '@lifeworks/common';

@Injectable()
export class PermissionsEffects {
	@Effect()
	loadPermissions$ = this.dataPersistence.fetch(PermissionsActionTypes.Load, {
		run: (action: Load, state: PermissionsState) =>
			this.permissionsApiService
				.get()
				.pipe(createPaginationSuccessAction(LoadSuccess)),
		onError: (action: PermissionsActions, error) => new LoadFailure(error)
	});

	@Effect()
	createPermission$ = this.dataPersistence.pessimisticUpdate(
		PermissionsActionTypes.CreatePermission, {
			run: (a: CreatePermission, state: PermissionsState) =>
				this.permissionsApiService
					.createPermission(a.payload)
					.pipe(
						map(r => new CreatePermissionSuccess(r))
					),
			onError: (action: PermissionsActions, error) => new CreatePermissionFailure(error)
		}
	)

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<PermissionsState>,
		private permissionsApiService: PermissionsApi
	) {}
}
