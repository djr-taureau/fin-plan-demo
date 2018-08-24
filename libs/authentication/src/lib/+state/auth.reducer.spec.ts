import { Authenticated } from './auth.actions';
import { User } from '../models';
import { authReducer } from './auth.reducer';
import { authInitialState } from './auth.init';
import { USER_ADVISOR } from '../testing';

describe('authReducer', () => {
	it('should work', () => {
		const action: Authenticated = new Authenticated(USER_ADVISOR);
		const actual = authReducer(authInitialState, action);
		expect(actual.currentUser).toEqual(USER_ADVISOR);
	});
});
