import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { dissoc } from 'ramda';

import {
	NotesActions,
	NotesActionTypes,
	Load,
	LoadSuccess,
	LoadFailure,
	Dismiss,
	DismissSuccess,
	DismissFailure
} from './notes.actions';
import { NotesState } from './notes.interfaces';
import { NotesApi } from '../services/notes-api.service';


@Injectable()
export class NotesEffects {
	@Effect()
	loadNotes$ = this.dataPersistence.fetch(
		NotesActionTypes.Load,
		{
			run: (action: Load, state: NotesState) =>
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
			onError: (action: NotesActions, error) =>
				new LoadFailure(error)
		}
	);

	@Effect()
	dismissNote$ = this.dataPersistence.optimisticUpdate(
		NotesActionTypes.Dismiss,
		{
			run: (action: Dismiss, state: NotesState) =>
				this.notesApiService
					.dismiss(action.payload)
					.pipe(map(results => new DismissSuccess(action.payload))),

			undoAction: (action: NotesActions, error) =>
				new DismissFailure(error)
		}
	);

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<NotesState>,
		private notesApiService: NotesApi
	) {}
}
