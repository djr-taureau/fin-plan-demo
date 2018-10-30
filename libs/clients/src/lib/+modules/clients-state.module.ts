import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

import { clientsReducer } from '../+state/clients.reducer';
import { ClientsEffects } from '../+state/clients.effects';
import { clientsInitialState } from '../+state/clients.init';

import { ToolsEffects } from '../+state/+tools/tools.effects';
import { toolsReducer } from '../+state/+tools/tools.reducer';
import { toolsInitialState } from '../+state/+tools/tools.init';

@NgModule({
	imports: [
		StoreModule.forFeature('clients', clientsReducer, {
			initialState: clientsInitialState
		}),
		StoreModule.forFeature('tools', toolsReducer, {
			initialState: toolsInitialState
		}),
		EffectsModule.forFeature([ClientsEffects, ToolsEffects])
	],
	declarations: [],
	providers: [ClientsEffects, ToolsEffects]
})
export class ClientsStateModule {}
