import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { NoteItems, NoteItem } from '../../models';
import { Notes } from '../../services';

@Component({
	selector: 'lw-notes-page',
	templateUrl: './Notes-page.component.html',
	styleUrls: ['./Notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
	data$: Observable<NoteItems>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;
	filteredItems$: Observable<NoteItems>;

	constructor(private notesService: Notes) {}

	ngOnInit() {
		this.notesService.load();
		this.initDataSet();
		this.isLoaded$ = this.notesService.isDataLoaded();
		this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet() {
		this.data$ = this.notesService.getAll();
		this.dataItemsCount$ = this.notesService.countOfAll();
	}

	applyFilters() {
		return map((x: NoteItems) => x.slice(0, 3));
	}

	event(event: DatasourceItemEvent<NoteItem>) {
		switch (event.action) {
			case 'remove':
				this.dismiss(event.item);
				break;
		}
	}

	dismiss(Note: NoteItem) {
		this.notesService.dismiss(Note.guid);
	}
}
