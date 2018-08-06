import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { NotificationsItemCollection } from '../models';
import * as NotificationsActions from '../+state/notifications.actions';
import { Store, select } from '@ngrx/store';
import { NotificationsState } from '../+state/notifications.reducer';
import {
	getNotifications,
	isLoaded,
	getNotificationCount
} from '../+state/notifications.selectors';

@Component({
	selector: 'lw-notifications-page',
	templateUrl: './notifications-page.component.html',
	styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {
	notifications$: Observable<NotificationsItemCollection>;
	isLoaded$: Observable<boolean>;
	notificationCount$: Observable<number>;

	constructor(private store: Store<NotificationsState>) {
		this.notifications$ = store.pipe(select(getNotifications));
		this.isLoaded$ = store.pipe(select(isLoaded));
		this.notificationCount$ = store.pipe(select(getNotificationCount));
	}

	ngOnInit() {
		this.store.dispatch(new NotificationsActions.Load());
	}
}
