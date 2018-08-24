import { Action } from '@ngrx/store';
import { User } from '../models';

export enum AuthActionTypes {
	AuthenticatedAction = '[Auth] Authenticated'
}

export class Authenticated implements Action {
	readonly type = AuthActionTypes.AuthenticatedAction;
	constructor(public payload: User) {}
}

export type AuthActions = Authenticated;
