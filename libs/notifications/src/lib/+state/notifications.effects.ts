import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  NotificationsActions,
  NotificationsActionTypes,
  LoadNotifications,
  NotificationsLoaded
} from './notifications.actions';
import { NotificationsState } from './notifications.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class NotificationsEffects {
  @Effect()
  effect$ = this.actions$.ofType(NotificationsActionTypes.NotificationsAction);

  @Effect()
  loadNotifications$ = this.dataPersistence.fetch(
    NotificationsActionTypes.LoadNotifications,
    {
      run: (action: LoadNotifications, state: NotificationsState) => {
        return new NotificationsLoaded(state);
      },

      onError: (action: LoadNotifications, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<NotificationsState>
  ) {}
}
