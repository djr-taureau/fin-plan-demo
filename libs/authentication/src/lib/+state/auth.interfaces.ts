import { User } from '../models';

export interface AuthState {
	currentUser: User;
}

export interface AuthStateDef {
	readonly auth: AuthState;
}
