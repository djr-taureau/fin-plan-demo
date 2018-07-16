import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  SimpleChanges
} from '@angular/core';
import { NotificationsItem } from '../models';
import { isNil, isEmpty, either, complement } from 'ramda';

@Component({
  selector: 'lw-notifications-item',
  templateUrl: './notifications-item.component.html',
  styleUrls: ['./notifications-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsItemComponent implements OnInit, OnChanges {
  @Input() item: NotificationsItem;

  canRender = false;

  get bindCheck() {
    console.log(`rendered ${this.item.id}`);
    return 'binding';
  }

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.canRender = canUse(this.item);
  }
}

export const canUse = complement(either(isNil, isEmpty));
