import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { omit } from 'ramda';

import {
	ClientsActions,
	ClientsActionTypes,
	Load,
	LoadSuccess,
	LoadFailure
} from './clients.actions';
import { ClientsState } from './clients.interfaces';
import { ClientsApi } from '../services/clients-api.service';
import { createPaginationSuccessAction } from '@lifeworks/common';

@Injectable()
export class ClientsEffects {
	@Effect()
	loadClients$ = this.dataPersistence.fetch(ClientsActionTypes.Load, {
		run: (action: Load, state: ClientsState) =>
			this.clientsApiService
				.get()
				.pipe(createPaginationSuccessAction(LoadSuccess)),
		onError: (action: ClientsActions, error) => new LoadFailure(error)
	});

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<ClientsState>,
		private clientsApiService: ClientsApi
	) {}
}
