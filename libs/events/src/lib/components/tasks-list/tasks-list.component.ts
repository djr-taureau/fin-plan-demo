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
import { EventItem } from '../../models';

export const _TasksListBase = mixinDataSource<
	typeof ComponentBase,
	EventItem
>(ComponentBase);

@Component({
	selector: 'lifeworks-tasks-list',
	templateUrl: './tasks-list.component.html',
	inputs: ['items'],
	outputs: ['event'],
	styleUrls: ['./tasks-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent extends _TasksListBase
	implements Datasource<EventItem> {
	constructor() {
		super();
	}
}
