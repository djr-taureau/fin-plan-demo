import { Action } from '@ngrx/store';
import { assoc } from 'ramda';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { AuthState } from './auth.interfaces';
import { authInitialState } from './auth.init';

export function authReducer(
	state = authInitialState,
	action: AuthActions
): AuthState {
	switch (action.type) {
		case AuthActionTypes.AuthenticatedAction:
			return assoc('currentUser', action.payload, state);
		default:
			return state;
	}
}
