import { Action } from '@ngrx/store';
import { ActivityLogItems } from '../models';

export enum ActivityLogActionTypes {
  Load = '[ActivityLog] Load',
  LoadSuccess = '[ActivityLog] Load Success',
  LoadFail = '[ActivityLog] Load Fail'
}

export class Load implements Action {
  readonly type = ActivityLogActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ActivityLogActionTypes.LoadSuccess;
  constructor(public payload: ActivityLogItems) {}
}

export class LoadFail implements Action {
  readonly type = ActivityLogActionTypes.LoadFail;
  constructor(public payload: Error) {}
}

export type ActivityLogActions = Load | LoadSuccess | LoadFail;
