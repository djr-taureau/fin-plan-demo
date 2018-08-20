import { Component, OnInit, Input } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { NotificationsState } from '../../+state/notifications.interfaces';
import { NotificationItems, NotificationItem } from '../../models';
import { Notifications } from '../../services';
import { tap, map } from 'rxjs/operators';

//todo: Make reuseable

export type NotificationsFilter = 'all' | 'dismissed' | 'undismissed';
export type DataState = 'loading' | 'empty' | 'loaded' | 'error';

export const getDataState = ([loaded, count]: [boolean, number]): DataState => {
	if (!loaded) {
		return 'loading';
	} else if (loaded && count > 0) {
		return 'loaded';
	} else if (loaded && count < 1) {
		return 'empty';
	}
	return 'error';
};

@Component({
	selector: 'lw-notifications-widget',
	templateUrl: './notifications-widget.component.html',
	styleUrls: ['./notifications-widget.component.scss']
})
export class NotificationsWidgetComponent implements OnInit {
	@Input() filter: NotificationsFilter;

	data$: Observable<NotificationItems>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;
	filteredItems$: Observable<NotificationItems>;

	constructor(private notificationsService: Notifications) {}

	ngOnInit() {
		this.notificationsService.load();
		this.initDataSet(this.filter);
		this.isLoaded$ = this.notificationsService.isDataLoaded();
		this.dataState$ = combineLatest(
			this.isLoaded$,
			this.dataItemsCount$
		).pipe(map(getDataState));
	}

	initDataSet(filter: NotificationsFilter) {
		switch (filter) {
			case 'all': {
				this.data$ = this.notificationsService.getAll();
				this.dataItemsCount$ = this.notificationsService.countOfAll();
				break;
			}
			case 'dismissed': {
				this.data$ = this.notificationsService.getDismissed();
				this.dataItemsCount$ = this.notificationsService.countOfDismissed();
				break;
			}
			case 'undismissed': {
				this.data$ = this.notificationsService
					.getUndismissed()
					.pipe(this.applyFilters());
				this.dataItemsCount$ = this.notificationsService.countOfUndismissed();
				break;
			}
		}
	}

	applyFilters() {
		return map((x: NotificationItems) => x.slice(0, 3));
	}

	onEvent(event: DatasourceItemEvent<NotificationItem>) {
		switch (event.action) {
			case 'remove':
				this.dismiss(event.item);
				break;
		}
	}

	dismiss(notification: NotificationItem) {
		this.notificationsService.dismiss(notification.guid);
	}
}
