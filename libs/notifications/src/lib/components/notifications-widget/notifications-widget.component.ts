import { Component, OnInit, Input } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

import { NotificationsState } from '../../+state/notifications.interfaces';
import { NotificationItems, NotificationItem } from '../../models';
import { Notifications } from '../../services';

export type NotificationsFilter = 'all' | 'dismissed' | 'undismissed';
export type DataState = 'loading' | 'empty' | 'loaded' | 'error';

@Component({
	selector: 'lw-notifications-widget',
	templateUrl: './notifications-widget.component.html',
	styleUrls: ['./notifications-widget.component.scss']
})
export class NotificationsWidgetComponent implements OnInit {
	@Input() filter: NotificationsFilter;

	notifications$: Observable<NotificationItems>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	notificationCount$: Observable<number>;

	constructor(private notificationsService: Notifications) {}

	ngOnInit() {
		this.notificationsService.load();
		this.initDataSet(this.filter);
		this.isLoaded$ = this.notificationsService.isDataLoaded();
		this.dataState$ = combineLatest(
			this.isLoaded$,
			this.notificationCount$,
			(loaded, count) => {
				if (!loaded) {
					return 'loading' as DataState;
				} else if (count > 0) {
					return 'loaded' as DataState;
				} else if (count < 1) {
					return 'empty' as DataState;
				} else {
					return 'error' as DataState;
				}
			}
		);
	}

	initDataSet(filter: NotificationsFilter) {
		switch (filter) {
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
