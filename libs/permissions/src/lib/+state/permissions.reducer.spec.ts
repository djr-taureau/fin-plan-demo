import { Load } from './permissions.actions';
import { permissionsReducer } from './permissions.reducer';
import { permissionsInitialState } from './permissions.init';
import { LoadDataStatus } from '@lifeworks/common';

describe('permissionsReducer', () => {
	describe('Load Action', () => {
		it('should set loading state to true', () => {
			const action: Load = new Load();
			const actual = permissionsReducer(
				permissionsInitialState,
				action
			);
			expect(actual.status).toEqual(LoadDataStatus.loading);
		});
	});
});
