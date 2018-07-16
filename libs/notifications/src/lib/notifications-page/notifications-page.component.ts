import { Component, OnInit } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { map, mergeScan, take } from 'rxjs/operators';
import { NotificationsItem } from '../models';
import { NotificationsService } from '../notifications.service';
import { NotificationAPIService } from '../notification-api.service';
import { head } from 'ramda';

export type Notifications = Array<NotificationsItem>;

@Component({
  selector: 'lw-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {
  singleNotificationsItem$: Observable<NotificationsItem> = of({} as any);

  notifications$: Observable<Notifications>;

  serviceNotifications$: Observable<Notifications>;

  constructor(
    private notifications: NotificationsService,
    private notificationsAPI: NotificationAPIService
  ) {}

  ngOnInit() {
    this.serviceNotifications$ = this.notifications.get();

    this.singleNotificationsItem$ = this.notificationsAPI
      .get()
      .pipe(map(x => head(x)));
  }
}
