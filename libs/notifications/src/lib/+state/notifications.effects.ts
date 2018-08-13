import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { dissoc } from 'ramda';

import {
	NotificationsActions,
	NotificationsActionTypes,
	Load,
	LoadSuccess,
	LoadFailure,
	Dismiss,
	DismissSuccess,
	DismissFailure
} from './notifications.actions';
import { NotificationsState } from './notifications.interfaces';
import { NotificationsApi } from '../services/notifications-api.service';

@Injectable()
export class NotificationsEffects {
	@Effect()
	loadNotifications$ = this.dataPersistence.fetch(
		NotificationsActionTypes.Load,
		{
			run: (action: Load, state: NotificationsState) =>
				this.notificationsApiService
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
			onError: (action: NotificationsActions, error) =>
				new LoadFailure(error)
		}
	);

	@Effect()
	dismissNotification$ = this.dataPersistence.optimisticUpdate(
		NotificationsActionTypes.Dismiss,
		{
			run: (action: Dismiss, state: NotificationsState) =>
				this.notificationsApiService
					.dismiss(action.payload)
					.pipe(map(results => new DismissSuccess(action.payload))),

			undoAction: (action: NotificationsActions, error) =>
				new DismissFailure(error)
		}
	);

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<NotificationsState>,
		private notificationsApiService: NotificationsApi
	) {}
}
