import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

import { ClientsScope, ClientItem } from '../models';
import { ClientsState } from '../+state/clients.interfaces';
import {
	isLoaded,
	allClients,
	allClientsCount,
} from '../+state/clients.selectors';
import { Load } from '../+state/clients.actions';
import { InputOption } from '@lifeworks/common';

export const PERMISSION_SCOPES: Array<InputOption> =[
	{ value: ClientsScope.Account, display: ClientsScope[ClientsScope.Account] },
	{ value: ClientsScope.Firm, display: ClientsScope[ClientsScope.Firm] }
]

@Injectable({
	providedIn: 'root'
})
export class Clients {
	private clientScopes$ = of(PERMISSION_SCOPES);
	constructor(private store: Store<ClientsState>) {}

	isDataLoaded() {
		return this.store.pipe(select(isLoaded));
	}

	load() {
		this.store.dispatch(new Load());
	}

	getAll() {
		return this.store.pipe(select(allClients));
	}

	countOfAll() {
		return this.store.pipe(select(allClientsCount));
	}

	getClientScopes() {
		return this.clientScopes$
	}
}
