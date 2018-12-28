import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NoteItem } from '../models';
import { NotesState } from '../+state/notes.reducer';
import { isLoaded, selectAllNotes, selectNoteTotal, selectCurrentNote } from '../+state/notes.selectors';
import { Load, Add, Update } from '../+state/notes.actions';

@Injectable({
	providedIn: 'root'
})
export class Notes {
  allNotes$: Observable<NoteItem[]> = this.store.pipe(select(selectAllNotes));
  notesCount$: Observable<number> = this.store.pipe(select(selectNoteTotal));
  isLoaded$: Observable<boolean> = this.store.pipe(select(isLoaded));
  currentNote$ = this.store.pipe(select(selectCurrentNote));

	constructor(private store: Store<NotesState>) {}

	load() {
		this.store.dispatch(new Load());
  }

  add(note) {
		this.store.dispatch(new Add(note));
  }

	update(note) {
		this.store.dispatch(new Update(note));
  }

}
