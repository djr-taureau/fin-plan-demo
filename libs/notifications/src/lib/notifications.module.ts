import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CommonModule } from '@lifeworks/common';
import { UiComponentsDataListModule } from '@lifeworks/ui-components/data-list';

import { notificationsReducer } from './+state/notifications.reducer';
import { NotificationsEffects } from './+state/notifications.effects';
import { notificationsInitialState } from './+state/notifications.init';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { NotificationsWidgetComponent } from './components/notifications-widget/notifications-widget.component';
import { NotificationLinkPipe } from './pipes/notification-link.pipe';
import { NotificationImagePipe } from './pipes/notification-image.pipe';

@NgModule({
	imports: [
		NgCommonModule,
		HttpClientModule,
		CommonModule,
		UiComponentsDataListModule,
		RouterModule.forChild([
			{
				path: 'notifications',
				component: NotificationsPageComponent
			}
		]),
		StoreModule.forFeature('notifications', notificationsReducer, {
			initialState: notificationsInitialState
		}),
		EffectsModule.forFeature([NotificationsEffects])
	],
	declarations: [
		NotificationsPageComponent,
		NotificationsWidgetComponent,
		NotificationLinkPipe,
		NotificationImagePipe
	],
	exports: [NotificationsPageComponent, NotificationsWidgetComponent],
	providers: [NotificationsEffects]
})
export class NotificationsModule {}
