import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { NotificationItems, NotificationItem } from '../../models';
import { Notifications } from '../../services';

@Component({
	selector: 'lw-notifications-page',
	templateUrl: './notifications-page.component.html',
	styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {
	data$: Observable<NotificationItems>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;
	filteredItems$: Observable<NotificationItems>;

	constructor(private notificationsService: Notifications) {}

	ngOnInit() {
		this.notificationsService.load();
		this.initDataSet();
		this.isLoaded$ = this.notificationsService.isDataLoaded();
		this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet() {
		this.data$ = this.notificationsService.getAll();
		this.dataItemsCount$ = this.notificationsService.countOfAll();
	}

	applyFilters() {
		return map((x: NotificationItems) => x.slice(0, 3));
	}

	event(event: DatasourceItemEvent<NotificationItem>) {
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
