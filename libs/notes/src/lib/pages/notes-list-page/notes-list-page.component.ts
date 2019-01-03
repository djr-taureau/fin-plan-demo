import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataState, getDatasetState } from '@lifeworks/common';
import { DatasourceItemEvent } from '@lifeworks/ui-components';
import { NoteItem } from '../../models';
import { Notes } from '../../services';

@Component({
	selector: 'lw-notes-list-page',
	templateUrl: './notes-list-page.component.html',
	styleUrls: ['./notes-list-page.component.scss']
})
export class NotesListPageComponent implements OnInit {
	data$: Observable<NoteItem[]> = this.notesFacade.allNotes$;
	isLoaded$: Observable<boolean> = this.notesFacade.isLoaded$
	dataItemsCount$: Observable<number> = this.notesFacade.notesCount$;

	constructor(private notesFacade: Notes) {}

	ngOnInit() {
    this.notesFacade.load();
    this.data$.subscribe(v => {
      const currentGuid = v[0].guid;
      this.notesFacade.selectNote(currentGuid)
    });
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
