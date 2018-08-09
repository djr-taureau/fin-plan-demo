import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { NotificationsItem } from './models';
import { NotificationsState } from './+state/notifications.interfaces';
import {
	isLoaded,
	getNotifications,
	getNotificationCount
} from './+state/notifications.selectors';
import { Load, Dismiss } from './+state/notifications.actions';

export type NotificationItemss = Array<NotificationsItem>;
@Injectable({
	providedIn: 'root'
})
export class NotificationsService {
	constructor(private store: Store<NotificationsState>) {}

	get() {
		this.store.dispatch(new Load());
		return this.store.pipe(select(getNotifications));
	}

	isDataLoaded() {
		return this.store.pipe(select(isLoaded));
	}

	count() {
		return this.store.pipe(select(getNotificationCount));
	}

	dismiss(id: string) {
		this.store.dispatch(new Dismiss(id));
	}
}
