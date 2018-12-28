import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { TaskItems, TaskItem } from '../../models';
import { Tasks } from '../../services';

@Component({
	selector: 'lw-tasks-page',
	templateUrl: './tasks-page.component.html',
	styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
	data$: Observable<TaskItem[]>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;
	filteredItems$: Observable<TaskItem[]>;

	constructor(private tasksService: Tasks) {}

	ngOnInit() {
		this.tasksService.load();
		this.initDataSet();
		this.isLoaded$ = this.tasksService.isDataLoaded();
		this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet() {
		this.data$ = this.tasksService.getAll();
		this.dataItemsCount$ = this.tasksService.countOfAll();
	}

	applyFilters() {
		return map((x: TaskItem[]) => x.slice(0, 3));
	}

	event(event: DatasourceItemEvent<TaskItem>) {
		switch (event.action) {
			case 'remove':
				this.dismiss(event.item);
				break;
		}
	}

	dismiss(Task: TaskItem) {
		this.tasksService.dismiss(Task.guid);
	}
}
