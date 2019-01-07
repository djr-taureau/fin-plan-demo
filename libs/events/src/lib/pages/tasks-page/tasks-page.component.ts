
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';
import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { EventItems, EventItem } from '../../models';
import { Events, EventsApi } from '../../services';
// todo: is this right place to pull in clients for filter by clients
import { Clients } from '../../../../../clients/src/lib/services';
import { ClientItem } from '../../../../../clients/src/lib/models';

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
  clientsData$: Observable<ClientItem[]>;
  clientId: string;


  @Output() selectionChange: EventEmitter<MatSelectChange>;
  @Output() clientFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() dateSort: EventEmitter<string> = new EventEmitter<string>();


	constructor(private eventsService: Events, private clientsService: Clients, public cd: ChangeDetectorRef) {}

	ngOnInit() {
    this.eventsService.load();
    this.clientsService.load();
		this.initDataSet();
		this.isLoaded$ = this.eventsService.isDataLoaded();
		this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet() {
    this.data$ = this.eventsService.getAll();
    this.clientsData$ = this.clientsService.getAll();
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

  selectClient(event) {
    this.clientId = event.value;
    console.log('client Id', event.value)
    this.clientFilter.emit(event.value);
  }

  selectDateSort(event) {
   console.log('date sort', event.value);
   this.dateSort.emit(event.value);
  }
}
