import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationsItem } from './models';
import { NotificationAPIService } from './notification-api.service';
import { PaginationResult } from '@lifeworks/common';

export type Notifications = Array<NotificationsItem>;
@Injectable({
	providedIn: 'root'
})
export class NotificationsService {
	constructor(private NotificationsAPI: NotificationAPIService) {}

	get(): Observable<PaginationResult<NotificationsItem>> {
		return this.NotificationsAPI.get();
	}
}
