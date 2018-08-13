import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationItems, NotificationItem } from '../../models';
import { NotificationsState } from '../../+state/notifications.interfaces';
import { Notifications } from '../../services/notifications.service';

export type NotificationsFilter = 'all' | 'dismissed' | 'undismissed';

@Component({
	selector: 'lw-notifications-widget',
	templateUrl: './notifications-widget.component.html',
	styleUrls: ['./notifications-widget.component.scss']
})
export class NotificationsWidgetComponent implements OnInit {
	@Input() filter: NotificationsFilter;

	notifications$: Observable<NotificationItems>;
	isLoaded$: Observable<boolean>;
	notificationCount$: Observable<number>;

	constructor(private notificationsService: Notifications) {}

	ngOnInit() {
		this.notificationsService.load();
		this.isLoaded$ = this.notificationsService.isDataLoaded();

		switch (this.filter) {
			case 'all': {
				this.notifications$ = this.notificationsService.getAll();
				this.notificationCount$ = this.notificationsService.countOfAll();
				break;
			}
			case 'dismissed': {
				this.notifications$ = this.notificationsService.getDismissed();
				this.notificationCount$ = this.notificationsService.countOfDismissed();
				break;
			}
			case 'undismissed': {
				this.notifications$ = this.notificationsService.getUndismissed();
				this.notificationCount$ = this.notificationsService.countOfUndismissed();
				break;
			}
		}
	}

	dismiss(notification: NotificationItem) {
		this.notificationsService.dismiss(notification.guid);
	}
}
