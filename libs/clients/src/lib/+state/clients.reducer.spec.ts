import { Load } from './clients.actions';
import { clientsReducer } from './clients.reducer';
import { clientsInitialState } from './clients.init';
import { LoadDataStatus } from '@lifeworks/common';

describe('clientsReducer', () => {
	describe('Load Action', () => {
		it('should set loading state to true', () => {
			const action: Load = new Load();
			const actual = clientsReducer(
				clientsInitialState,
				action
			);
			expect(actual.status).toEqual(LoadDataStatus.loading);
		});
	});
});
