import {
	Component,
	Input,
	OnChanges,
	ChangeDetectionStrategy
} from '@angular/core';
import { ActivityLogItem } from '../models';
import { isUseable } from '@lifeworks/common';

@Component({
	selector: 'lw-activity-log-item',
	templateUrl: './activity-log-item.component.html',
	styleUrls: ['./activity-log-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityLogItemComponent implements OnChanges {
	@Input() public item: ActivityLogItem;

	canRender = false;

	ngOnChanges() {
		this.canRender = isUseable(this.item);
	}
}
