import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import {
	routerReducer,
	StoreRouterConnectingModule,
	RouterStateSerializer
} from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FixedRouterSerializer } from '@lifeworks/core';

@NgModule({
	imports: [
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		StoreModule.forRoot(
			{ route: routerReducer },
			{
				initialState: {},
				metaReducers: !environment.production ? [storeFreeze] : []
			}
		),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
	],
	exports: [StoreModule, EffectsModule],
	providers: [
		{ provide: RouterStateSerializer, useClass: FixedRouterSerializer }
	]
})
export class AppStateModule {}
