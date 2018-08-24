import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from '../+state/auth.reducer';
import { authInitialState } from '../+state/auth.init';
import { AuthEffects } from '../+state/auth.effects';
@NgModule({
	imports: [
		StoreModule.forFeature('auth', authReducer, {
			initialState: authInitialState
		}),
		EffectsModule.forFeature([AuthEffects])
	],
	providers: [AuthEffects],
	exports: [StoreModule, EffectsModule]
})
export class AuthenticationStateModule {}
