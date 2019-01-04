import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { EventItems, EventItem } from '../../models';
import { Events, EventsApi } from '../../services';

@Component({
	selector: 'lifeworks-tasks-page',
	templateUrl: './tasks-page.component.html',
	styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
	data$: Observable<EventItem[]>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;
	filteredItems$: Observable<EventItem[]>;

	constructor(private eventsService: Events) {}

	ngOnInit() {
		this.eventsService.load();
		this.initDataSet();
		this.isLoaded$ = this.eventsService.isDataLoaded();
		this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet() {
		this.data$ = this.eventsService.getAll();
		this.dataItemsCount$ = this.eventsService.countOfAll();
	}

	applyFilters() {
		return map((x: EventItem[]) => x.slice(0, 3));
	}

	event(event: DatasourceItemEvent<EventItem>) {
		switch (event.action) {
			case 'remove':
				this.dismiss(event.item);
				break;
		}
	}

	dismiss(Event: EventItem) {
		this.eventsService.dismiss(Event.guid);
	}
}
