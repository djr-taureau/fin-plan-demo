import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { EventItems, EventItem } from '../../models';
import { Events } from '../../services';
import { isArray } from 'util';

export type EventsFilter = 'all' | 'dismissed' | 'undismissed' | 'client' | 'dueDate' | 'assignedTo';

@Component({
	selector: 'lifeworks-tasks-widget',
	templateUrl: './tasks-widget.component.html',
	styleUrls: ['./tasks-widget.component.scss']
})
export class TasksWidgetComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() filter: EventsFilter;
  @Input() clientFilter$: Observable<string>;
	@Input() title: string;
  @Input() linkText = 'View all';

	data$: Observable<EventItem[]>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;
  filteredItems$: Observable<EventItems>;


	constructor(private eventsService: Events) { }

	ngOnInit() {

		this.eventsService.load();
		this.initDataSet(this.filter);
		this.isLoaded$ = this.eventsService.isDataLoaded();
    this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
    this.data$.subscribe(v => console.log('mock this data', v))
    this.clientFilter$.subscribe(v => {
      console.log('from page', v)
      this.selectClient(v)
    })
  }

  ngAfterViewInit() {
    // console.log('widget page', this.clientFilter)
  }

  ngOnChanges(event) {
    console.log('any event', event)
  }



	initDataSet(filter: EventsFilter) {
		switch (filter) {
			case 'all': {
				this.data$ = this.eventsService.getAll();
				this.dataItemsCount$ = this.eventsService.countOfAll();
				break;
			}
			case 'dismissed': {
				this.data$ = this.eventsService.getDismissed();
				this.dataItemsCount$ = this.eventsService.countOfDismissed();
				break;
			}
			case 'undismissed': {
				this.data$ = this.eventsService
					.getUndismissed()
					.pipe(this.applyFilters());
				this.dataItemsCount$ = this.eventsService.countOfUndismissed();
				break;
      }
      case 'client': {
				this.data$ = this.eventsService
					.getUndismissed()
					.pipe(this.applyFilters());
				this.dataItemsCount$ = this.eventsService.countOfUndismissed();
				break;
			}
		}
	}

	applyFilters() {
		return map((x: EventItems) => x.slice(0, 3));
	}

	event(event: DatasourceItemEvent<EventItem>) {
		switch (event.action) {
			case 'remove':
				this.dismiss(event.item);
				break;
		}
	}

	dismiss(task: EventItem) {
		this.eventsService.dismiss(task.guid);
  }

  selectClient(clientId: string) {
   this.data$ = this.eventsService.getFilteredByClient(clientId);
  }

  selectDateSort(event) {
    switch (event.value) {
      case 'soonest':
      // this.data$.pipe(
        console.log('widget')
      break;
      case 'latest':
        //
        console.log('widget')
      break;
    }
  }
}
