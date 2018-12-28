import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { NoteItem } from '../../models';
import { Notes } from '../../services';

export type NotesFilter = 'all' | 'dismissed' | 'undismissed';

@Component({
	selector: 'lw-notes-widget',
	templateUrl: './notes-widget.component.html',
	styleUrls: ['./notes-widget.component.scss']
})
export class NotesWidgetComponent implements OnInit {
	@Input() filter: NotesFilter;
	@Input() title: string;
	@Input() linkText = 'View all';

	data$: Observable<Array<NoteItem>>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;
	filteredItems$: Observable<Array<NoteItem>>;

	constructor(private NotesService: Notes) {}

	ngOnInit() {
		this.NotesService.load();
		this.initDataSet(this.filter);
		// this.isLoaded$ = this.NotesService.isDataLoaded();
		// this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet(filter: NotesFilter) {
		// switch (filter) {
		// 	case 'all': {
		// 		this.data$ = this.NotesService.getAll();
		// 		this.dataItemsCount$ = this.NotesService.countOfAll();
		// 		break;
		// 	}
		// 	case 'dismissed': {
		// 		this.data$ = this.NotesService.getDismissed();
		// 		this.dataItemsCount$ = this.NotesService.countOfDismissed();
		// 		break;
		// 	}
		// 	case 'undismissed': {
		// 		this.data$ = this.NotesService
		// 			.getUndismissed()
		// 			.pipe(this.applyFilters());
		// 		this.dataItemsCount$ = this.NotesService.countOfUndismissed();
		// 		break;
		// 	}
		// }
	}

	applyFilters() {
		return map((x: Array<NoteItem>) => x.slice(0, 3));
	}

	event(event: DatasourceItemEvent<NoteItem>) {
		switch (event.action) {
			case 'remove':
				this.dismiss(event.item);
				break;
		}
	}

	dismiss(Note: NoteItem) {
		// this.NotesService.dismiss(Note.guid);
	}
}
