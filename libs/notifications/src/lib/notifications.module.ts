import { NgModule } from '@angular/core';

import {
	NotificationsCoreModule,
	NotificationsRoutingModule,
	NotificationsStateModule,
	NotificationsUIModule
} from './+modules';
import { NotificationsPageComponent } from './pages';
import {
	NotificationsWidgetComponent,
	NotificationsListComponent
} from './components';
import { NotificationLinkPipe, NotificationImagePipe } from './pipes';

@NgModule({
	imports: [
		NotificationsCoreModule,
		NotificationsRoutingModule,
		NotificationsStateModule,
		NotificationsUIModule
	],
	declarations: [
		NotificationsPageComponent,
		NotificationsWidgetComponent,
		NotificationLinkPipe,
		NotificationImagePipe,
		NotificationsListComponent
	],
	exports: [NotificationsPageComponent, NotificationsWidgetComponent]
})
export class NotificationsModule {}
