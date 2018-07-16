import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivityLogItem } from '../models';
import { canUse } from '@lifeworks/utilities';

@Component({
  selector: 'lw-activity-log-item',
  templateUrl: './activity-log-item.component.html',
  styleUrls: ['./activity-log-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityLogItemComponent implements OnChanges {
  @Input() item: ActivityLogItem;

  canRender = false;

  ngOnChanges() {
    this.canRender = canUse(this.item);
  }
}
