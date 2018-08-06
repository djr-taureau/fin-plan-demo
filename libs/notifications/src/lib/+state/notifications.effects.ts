import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
	NotificationsActions,
	NotificationsActionTypes,
	Load,
	LoadSuccess,
	LoadFail
} from './notifications.actions';
import { NotificationsState } from './notifications.reducer';
import { NotificationsService } from '../notifications.service';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { dissoc } from 'ramda';

@Injectable()
export class NotificationsEffects {
	@Effect()
	loadNotifications$ = this.dataPersistence.fetch(
		NotificationsActionTypes.Load,
		{
			run: (action: Load, state: NotificationsState) =>
				this.notificationsService
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
				new LoadFail(error)
		}
	);

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<NotificationsState>,
		private notificationsService: NotificationsService
	) {}
}
