import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { dissoc } from 'ramda';

import {
	TasksActions,
	TasksActionTypes,
	Load,
	LoadSuccess,
	LoadFailure,
	Dismiss,
	DismissSuccess,
	DismissFailure
} from './tasks.actions';
import { TasksState } from './tasks.interfaces';
import { TasksApi } from '../services/tasks-api.service';


@Injectable()
export class TasksEffects {
	@Effect()
	loadNotes$ = this.dataPersistence.fetch(
		TasksActionTypes.Load,
		{
			run: (action: Load, state: TasksState) =>
				this.notesApiService
					.get()
					.pipe(
						map(
							results =>
								new LoadSuccess(
									results.results,
									dissoc('results', results)
								)
						)
					),
			onError: (action: TasksActions, error) =>
				new LoadFailure(error)
		}
	);

	@Effect()
	dismissNote$ = this.dataPersistence.optimisticUpdate(
		TasksActionTypes.Dismiss,
		{
			run: (action: Dismiss, state: TasksState) =>
				this.notesApiService
					.dismiss(action.payload)
					.pipe(map(results => new DismissSuccess(action.payload))),

			undoAction: (action: TasksActions, error) =>
				new DismissFailure(error)
		}
	);

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<TasksState>,
		private notesApiService: TasksApi
	) {}
}
