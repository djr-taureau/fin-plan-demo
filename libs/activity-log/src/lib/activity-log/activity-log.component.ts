import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivityLogItem } from '../models';

@Component({
  selector: 'lw-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityLogComponent implements OnInit {

  @Input() public log: Array<ActivityLogItem>

  constructor() { }

  ngOnInit() {
  }

}
