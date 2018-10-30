import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
	ToolsActions,
	ToolsActionTypes,
	Load,
	LoadSuccess,
	LoadFailure
} from './tools.actions';
import { ToolsState } from './tools.interfaces';
import { ToolsApi } from '../../services';
import { createPaginationSuccessAction } from '@lifeworks/common';

@Injectable()
export class ToolsEffects {
	@Effect()
	loadTools$ = this.dataPersistence.fetch(ToolsActionTypes.Load, {
		run: (action: Load, state: ToolsState) =>
			this.toolsApi
				.get()
				.pipe(createPaginationSuccessAction(LoadSuccess)),
		onError: (action: ToolsActions, error) => new LoadFailure(error)
	});

	constructor(
		private dataPersistence: DataPersistence<ToolsState>,
		private toolsApi: ToolsApi
	) {}
}
