import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { Auth } from './auth.interfaces';
import { authInitialState } from './auth.init';

export function authReducer(
	state = authInitialState,
	action: AuthActions
): Auth {
	switch (action.type) {
		case AuthActionTypes.AuthenticatedAction:
			return { ...state, ...action.payload };

		default:
			return state;
	}
}
