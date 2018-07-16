import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationsItem } from './models';
import { NotificationAPIService } from './notification-api.service';

export type Notifications = Array<NotificationsItem>;
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications = this.notificationsAPI.get();
  constructor(private notificationsAPI: NotificationAPIService) {}

  get(): Observable<Array<NotificationsItem>> {
    return this.notifications;
  }
}
