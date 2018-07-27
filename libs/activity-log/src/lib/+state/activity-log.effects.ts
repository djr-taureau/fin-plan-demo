import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  ActivityLogActions,
  ActivityLogActionTypes,
  Load,
  LoadSuccess,
  LoadFail
} from './activity-log.actions';
import { ActivityLogState } from './activity-log.reducer';
import { DataPersistence } from '@nrwl/nx';
import { ActivityLogService } from '../activity-log.service';
import { map, tap, flatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getApiError } from '@lifeworks/core';

@Injectable()
export class ActivityLogEffects {
  @Effect()
  loadActivityLog$ = this.dataPersistence.fetch(ActivityLogActionTypes.Load, {
    run: (action: Load, state: ActivityLogState) =>
      this.activityLogService
        .get()
        .pipe(map(results => new LoadSuccess(results))),
    onError: (action: ActivityLogActions, error) => new LoadFail(error)
  });

  constructor(
    private dataPersistence: DataPersistence<ActivityLogState>,
    private activityLogService: ActivityLogService
  ) {}
}
