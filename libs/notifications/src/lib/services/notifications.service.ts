import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { NotificationItem } from '../models';
import { NotificationsState } from '../+state/notifications.interfaces';
import {
	isLoaded,
	allNotifications,
	allNotificationsCount,
	undismissedNotifications,
	undismissedCount,
	dismissedNotifications,
	dismissedCount
} from '../+state/notifications.selectors';
import { Load, Dismiss } from '../+state/notifications.actions';

export type NotificationItemss = Array<NotificationItem>;

@Injectable({
	providedIn: 'root'
})
export class Notifications {
	constructor(private store: Store<NotificationsState>) {}

	isDataLoaded() {
		return this.store.pipe(select(isLoaded));
	}

	load() {
		this.store.dispatch(new Load());
	}

	getAll() {
		return this.store.pipe(select(allNotifications));
	}

	countOfAll() {
		return this.store.pipe(select(allNotificationsCount));
	}

	getUndismissed() {
		return this.store.pipe(select(undismissedNotifications));
	}

	countOfUndismissed() {
		return this.store.pipe(select(undismissedCount));
	}

	getDismissed() {
		return this.store.pipe(select(dismissedNotifications));
	}

	countOfDismissed() {
		return this.store.pipe(select(dismissedCount));
	}

	dismiss(id: string) {
		this.store.dispatch(new Dismiss(id));
	}
}
