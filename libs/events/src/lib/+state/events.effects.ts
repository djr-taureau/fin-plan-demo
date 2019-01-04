import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { dissoc } from 'ramda';

import {
	EventsActions,
	EventsActionTypes,
	Load,
	LoadSuccess,
	LoadFailure,
	Dismiss,
	DismissSuccess,
	DismissFailure
} from './events.actions';
import { EventsState } from './events.interfaces';
import { EventsApi } from '../services/events-api.service';


@Injectable()
export class EventsEffects {
	@Effect()
	loadEvents$ = this.dataPersistence.fetch(
		EventsActionTypes.Load,
		{
			run: (action: Load, state: EventsState) =>
				this.eventsApiService
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
			onError: (action: EventsActions, error) =>
				new LoadFailure(error)
		}
	);

	@Effect()
	dismissEvent$ = this.dataPersistence.optimisticUpdate(
		EventsActionTypes.Dismiss,
		{
			run: (action: Dismiss, state: EventsState) =>
				this.eventsApiService
					.dismiss(action.payload)
					.pipe(map(results => new DismissSuccess(action.payload))),

			undoAction: (action: EventsActions, error) =>
				new DismissFailure(error)
		}
	);

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<EventsState>,
		private eventsApiService: EventsApi
	) {}
}
