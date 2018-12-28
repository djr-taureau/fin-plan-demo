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
import { TaskItem } from '../../models';

export const _TasksListBase = mixinDataSource<
	typeof ComponentBase,
	TaskItem
>(ComponentBase);

@Component({
	selector: 'lw-tasks-list',
	templateUrl: './tasks-list.component.html',
	inputs: ['items'],
	outputs: ['event'],
	styleUrls: ['./tasks-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent extends _TasksListBase
	implements Datasource<TaskItem> {
	constructor() {
		super();
	}
}
