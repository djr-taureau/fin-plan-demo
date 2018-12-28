import { Action } from '@ngrx/store';
import { NoteItem } from '../models';
import { IPaginationHeader } from '@lifeworks/common';

export enum NotesActionTypes {
	Load = '[Notes] Load',
	LoadSuccess = '[Notes] Load Success',
  LoadFailure = '[Notes] Load Failure',
  Select = '[Notes] Select',
  Add = '[Notes] Add',
  AddSuccess = '[Notes] Add Success',
	AddFailure = '[Notes] Add Failure',
	Update = '[Notes] Update',
	UpdateSuccess = '[Notes] Update Success',
	UpdateFailure = '[Notes] Update Failure'
}

export class Load implements Action {
  readonly type = NotesActionTypes.Load;
  constructor() { }
}

export class LoadSuccess implements Action {
	readonly type = NotesActionTypes.LoadSuccess;
	constructor(
		public payload: NoteItem[],
		public paging: IPaginationHeader
	) {}
}

export class LoadFailure implements Action {
	readonly type = NotesActionTypes.LoadFailure;
	constructor(public payload: Error) {}
}

export class Select implements Action {
  readonly type = NotesActionTypes.Select;
  constructor(public payload) { }
}
export class Add implements Action {
  readonly type = NotesActionTypes.Add;
  constructor(
    public payload: { note: NoteItem }
  ) {}
}

export class AddSuccess implements Action {
  readonly type = NotesActionTypes.AddSuccess;
  constructor(
    public payload: NoteItem
  ) {}
}

export class AddFailure implements Action {
	readonly type = NotesActionTypes.AddFailure;
	constructor(public payload: string) {}
}

export class Update implements Action {
	readonly type = NotesActionTypes.Update;
	constructor(public payload: NoteItem) {}
}

export class UpdateSuccess implements Action {
	readonly type = NotesActionTypes.UpdateSuccess;
	constructor(public payload:  NoteItem) {}
}
export class UpdateFailure implements Action {
	readonly type = NotesActionTypes.UpdateFailure;
	constructor(public payload: string) {}
}

export type NotesActions =
	| Load
	| LoadSuccess
  | LoadFailure
  | Select
  | Add
	| AddSuccess
	| AddFailure
	| Update
	| UpdateSuccess
	| UpdateFailure;
