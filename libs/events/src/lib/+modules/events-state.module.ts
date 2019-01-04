import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { eventsReducer } from '../+state/events.reducer';
import { EventsEffects } from '../+state/events.effects';
import { eventsInitialState } from '../+state/events.init';

@NgModule({
	imports: [
		StoreModule.forFeature('Events', eventsReducer, {
			initialState: eventsInitialState
		}),
		EffectsModule.forFeature([EventsEffects])
	],
	declarations: [],
	providers: [EventsEffects]
})
export class EventsStateModule {}
