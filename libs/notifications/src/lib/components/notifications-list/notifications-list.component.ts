//tslint:disable: use-input-property-decorator use-output-property-decorator
import {
	Component,
	EventEmitter,
	ChangeDetectionStrategy
} from '@angular/core';
import {
	mixinDataSource,
	Datasource,
	ComponentBase
} from '@lifeworks/ui-components';
import { NotificationItem } from '../../models';

export const _NotificationsListBase = mixinDataSource<
	typeof ComponentBase,
	NotificationItem
>(ComponentBase);

@Component({
	selector: 'lw-notifications-list',
	templateUrl: './notifications-list.component.html',
	inputs: ['items'],
	outputs: ['event'],
	styleUrls: ['./notifications-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsListComponent extends _NotificationsListBase
	implements Datasource<NotificationItem> {
	constructor() {
		super();
	}
}
