import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

import { clientsReducer } from '../+state/clients.reducer';
import { ClientsEffects } from '../+state/clients.effects';
import { clientsInitialState } from '../+state/clients.init';

@NgModule({
	imports: [
		StoreModule.forFeature('clients', clientsReducer, {
			initialState: clientsInitialState
		}),
		EffectsModule.forFeature([ClientsEffects])
	],
	declarations: [],
	providers: [ClientsEffects]
})
export class ClientsStateModule {}
