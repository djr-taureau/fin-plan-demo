import { Component, OnInit, Input } from '@angular/core';
import { NotificationsItem } from '../models';

@Component({
  selector: 'lw-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() notifications: Array<NotificationsItem>;

  constructor() {}

  ngOnInit() {}
}
