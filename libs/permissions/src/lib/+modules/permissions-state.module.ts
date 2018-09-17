import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

import { permissionsReducer } from '../+state/permissions.reducer';
import { PermissionsEffects } from '../+state/permissions.effects';
import { permissionsInitialState } from '../+state/permissions.init';

@NgModule({
	imports: [
		StoreModule.forFeature('permissions', permissionsReducer, {
			initialState: permissionsInitialState
		}),
		EffectsModule.forFeature([PermissionsEffects])
	],
	declarations: [],
	providers: [PermissionsEffects]
})
export class PermissionsStateModule {}
