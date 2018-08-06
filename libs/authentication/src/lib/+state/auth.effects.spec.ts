import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { AuthEffects } from './auth.effects';

import { Observable } from 'rxjs';

xdescribe('AuthEffects', () => {
	// let actions$: Observable<any>;
	let effects$: AuthEffects;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({})],
			providers: [
				AuthEffects,
				DataPersistence
				// provideMockActions(() => actions$)
			]
		});

		effects$ = TestBed.get(AuthEffects);
	});

	describe('someEffect', () => {});
});
