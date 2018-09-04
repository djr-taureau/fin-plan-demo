import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map, tap, flatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { dissoc } from 'ramda';
import {
	ActivityLogActions,
	ActivityLogActionTypes,
	Load,
	LoadSuccess,
	LoadFail
} from './activity-log.actions';

import { ActivityLogState } from './activity-log.reducer';
import { getApiError } from '../activity-log-errors';
import { ActivityLogService } from '../services';

@Injectable()
export class ActivityLogEffects {
	@Effect()
	loadActivityLog$ = this.dataPersistence.fetch(ActivityLogActionTypes.Load, {
		run: (action: Load, state: ActivityLogState) =>
			this.activityLogService
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
		onError: (action: ActivityLogActions, error) => new LoadFail(error)
	});

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<ActivityLogState>,
		private activityLogService: ActivityLogService
	) {}
}
