import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { TaskItems, TaskItem } from '../../models';
import { Tasks } from '../../services';

export type TasksFilter = 'all' | 'dismissed' | 'undismissed';

@Component({
	selector: 'lw-tasks-widget',
	templateUrl: './tasks-widget.component.html',
	styleUrls: ['./tasks-widget.component.scss']
})
export class TasksWidgetComponent implements OnInit {
	@Input() filter: TasksFilter;
	@Input() title: string;
  @Input() linkText = 'View all';

  mockTasks = [
    {
      guid: '8433c5d8-8aba-414e-a923-c5efd5a42356',
      task: 'task one',
      dismissed: false,
      taskType: 'meeting-reminder',
      target: {
        guid: 'b5a87719-78a6-4b4e-83ab-481f83239784',
        displayName: 'Horton Bridges',
        entityType: 'user'
      },
      timestamps: {
        createdOn: new Date(),
        modifiedOn: new Date()
    }
  },
  {
    guid: '221105e3-f86d-48c2-bcb6-438de537f431',
    task: 'task two',
    dismissed: false,
    taskType: 'meeting-reminder',
    target: {
      guid: 'b5a87719-78a6-4b4e-83ab-481f83239784',
      displayName: 'Horton Bridges',
      entityType: 'user'
    },
    timestamps: {
      createdOn: new Date(),
      modifiedOn: new Date()
  }
},
  ]

	data$;  // : Observable<TaskItem[]>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;
	filteredItems$: Observable<TaskItems>;

	constructor(private tasksService: Tasks) {}

	ngOnInit() {
		this.tasksService.load();
		this.initDataSet(this.filter);
		this.isLoaded$ = this.tasksService.isDataLoaded();
		this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet(filter: TasksFilter) {
		switch (filter) {
			case 'all': {
				this.data$ = this.mockTasks;  // this.tasksService.getAll();
				this.dataItemsCount$ = this.data$.length;
				break;
			}
			case 'dismissed': {
				this.data$ = this.tasksService.getDismissed();
				this.dataItemsCount$ = this.tasksService.countOfDismissed();
				break;
			}
			case 'undismissed': {
				this.data$ = this.tasksService
					.getUndismissed()
					.pipe(this.applyFilters());
				this.dataItemsCount$ = this.tasksService.countOfUndismissed();
				break;
			}
		}
	}

	applyFilters() {
		return map((x: TaskItems) => x.slice(0, 3));
	}

	event(event: DatasourceItemEvent<TaskItem>) {
		switch (event.action) {
			case 'remove':
				this.dismiss(event.item);
				break;
		}
	}

	dismiss(notification: TaskItem) {
		this.tasksService.dismiss(notification.guid);
	}
}
