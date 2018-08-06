import { Authenticated } from './auth.actions';
import { User } from './auth.interfaces';
import { authReducer } from './auth.reducer';
import { authInitialState } from './auth.init';

describe('authReducer', () => {
	const testUser: User = {
		id: '1',
		displayName: 'Name 1',
		roles: ['role 1'],
		permissions: []
	};

	it('should work', () => {
		const action: Authenticated = new Authenticated(testUser);
		const actual = authReducer(authInitialState, action);
		expect(actual).toEqual(testUser);
	});
});
