import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { CoreModule } from '@lifeworks/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
	notificationsReducer,
	initialState as notificationsInitialState
} from './+state/notifications.reducer';
import { NotificationsEffects } from './+state/notifications.effects';
import { HttpClientModule } from '@angular/common/http';
import { UiComponentsDataListModule } from '@lifeworks/ui-components/data-list';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		CoreModule,
		UiComponentsDataListModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: NotificationsPageComponent
			}
		]),
		StoreModule.forFeature('notifications', notificationsReducer, {
			initialState: notificationsInitialState
		}),
		EffectsModule.forFeature([NotificationsEffects])
	],
	declarations: [NotificationsPageComponent],
	providers: [NotificationsEffects]
})
export class NotificationsModule {}
