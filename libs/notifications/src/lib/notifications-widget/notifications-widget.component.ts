import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationItems, NotificationsItem } from '../models';
import { NotificationsState } from '../+state/notifications.interfaces';
import { NotificationsService } from '../notifications.service';

@Component({
	selector: 'lw-notifications-widget',
	templateUrl: './notifications-widget.component.html',
	styleUrls: ['./notifications-widget.component.scss']
})
export class NotificationsWidgetComponent implements OnInit {
	notifications$: Observable<NotificationItems>;
	isLoaded$: Observable<boolean>;
	notificationCount$: Observable<number>;

	constructor(private notificationsService: NotificationsService) {}

	ngOnInit() {
		this.notifications$ = this.notificationsService.get();
		this.isLoaded$ = this.notificationsService.isDataLoaded();
		this.notificationCount$ = this.notificationsService.count();
	}

	dismiss(notification: NotificationsItem) {
		this.notificationsService.dismiss(notification.GUID);
	}
}
