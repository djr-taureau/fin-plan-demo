import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { NoteItem } from '../../models';
import { Notes } from '../../services';

@Component({
	selector: 'lw-team-list-page',
	templateUrl: './team-list-page.component.html',
	styleUrls: ['./team-list-page.component.scss']
})
export class TeamListPageComponent implements OnInit {
  columns: string[] = ['name', 'owner', 'created On']
	data$: Observable<NoteItem[]> = this.notesFacade.allNotes$;
	isLoaded$: Observable<boolean> = this.notesFacade.isLoaded$
	dataItemsCount$: Observable<number> = this.notesFacade.notesCount$;

	constructor(private notesFacade: Notes) {}

	ngOnInit() {
    this.notesFacade.load();
    this.data$.subscribe(v => console.log('data', v));
    this.dataItemsCount$.subscribe(v => console.log('item count', v));
    this.isLoaded$.subscribe(v => console.log('status', v));
	}

	event(event: DatasourceItemEvent<NoteItem>) {
		switch (event.action) {
			case 'remove':
				console.log('hold it');
				break;
		}
	}

}
