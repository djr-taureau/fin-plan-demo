import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { notificationsReducer } from '../+state/notifications.reducer';
import { NotificationsEffects } from '../+state/notifications.effects';
import { notificationsInitialState } from '../+state/notifications.init';

@NgModule({
	imports: [
		StoreModule.forFeature('notifications', notificationsReducer, {
			initialState: notificationsInitialState
		}),
		EffectsModule.forFeature([NotificationsEffects])
	],
	declarations: [],
	providers: [NotificationsEffects]
})
export class NotificationsStateModule {}
