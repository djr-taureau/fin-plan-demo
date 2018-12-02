import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { NoteItem } from '../models';
import { NotesState } from '../+state/notes.interfaces';
import {
	isLoaded,
	allNotes,
	allNotesCount,
	undismissedNotes,
	undismissedCount,
	dismissedNotes,
	dismissedCount
} from '../+state/notes.selectors';
import { Load, Dismiss } from '../+state/notes.actions';

@Injectable({
	providedIn: 'root'
})
export class Notes {
	constructor(private store: Store<NotesState>) {}

	isDataLoaded() {
		return this.store.pipe(select(isLoaded));
	}

	load() {
		this.store.dispatch(new Load());
	}

	getAll() {
		return this.store.pipe(select(allNotes));
	}

	countOfAll() {
		return this.store.pipe(select(allNotesCount));
	}

	getUndismissed() {
		return this.store.pipe(select(undismissedNotes));
	}

	countOfUndismissed() {
		return this.store.pipe(select(undismissedCount));
	}

	getDismissed() {
		return this.store.pipe(select(dismissedNotes));
	}

	countOfDismissed() {
		return this.store.pipe(select(dismissedCount));
	}

	getFiltered() {
		return this.store.pipe(select(dismissedNotes));
	}

	countOfFiltered() {
		return this.store.pipe(select(dismissedCount));
	}

	dismiss(id: string) {
		this.store.dispatch(new Dismiss(id));
  }

  addNote() {

  }
}
