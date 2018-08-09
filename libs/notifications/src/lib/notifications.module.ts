import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@lifeworks/core';
import { CommonModule } from '@lifeworks/common';
import { UiComponentsDataListModule } from '@lifeworks/ui-components/data-list';

import { notificationsReducer } from './+state/notifications.reducer';
import { NotificationsEffects } from './+state/notifications.effects';
import { notificationsInitialState } from './+state/notifications.init';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { NotificationsWidgetComponent } from './notifications-widget/notifications-widget.component';

@NgModule({
	imports: [
		NgCommonModule,
		HttpClientModule,
		CoreModule,
		CommonModule,
		UiComponentsDataListModule,
		RouterModule.forChild([
			{
				path: 'notifications',
				pathMatch: 'full',
				component: NotificationsPageComponent
			}
		]),
		StoreModule.forFeature('notifications', notificationsReducer, {
			initialState: notificationsInitialState
		}),
		EffectsModule.forFeature([NotificationsEffects])
	],
	declarations: [NotificationsPageComponent, NotificationsWidgetComponent],
	exports: [NotificationsWidgetComponent],
	providers: [NotificationsEffects]
})
export class NotificationsModule {}
