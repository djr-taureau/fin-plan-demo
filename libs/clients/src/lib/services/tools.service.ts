import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ToolsState } from '../+state/+tools/tools.interfaces';
import {
	isLoaded,
	all,
} from '../+state/+tools/tools.selectors';
import { Load } from '../+state/+tools/tools.actions';


@Injectable({
	providedIn: 'root'
})
export class Tools {
	constructor(private store: Store<ToolsState>) {}

	isDataLoaded() {
		return this.store.pipe(select(isLoaded));
	}

	load() {
		this.store.dispatch(new Load());
	}

	getAll() {
		return this.store.pipe(select(all));
	}
}
