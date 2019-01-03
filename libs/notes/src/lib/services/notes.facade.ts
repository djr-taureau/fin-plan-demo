import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select, ActionsSubject } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, merge } from 'rxjs/operators';
import { NoteItem } from '../models';
import { NotesState } from '../+state/notes.reducer';
import * as fromNotes from '../+state/notes.selectors';
import { Load, Add, Update, Selected, NotesActionTypes } from '../+state/notes.actions';

@Injectable({
	providedIn: 'root'
})
export class Notes {
  allNotes$ = this.store.pipe(select(fromNotes.selectAllNotes));
  notesCount$ = this.store.pipe(select(fromNotes.selectNoteTotal));
  currentNoteId$ = this.store.pipe(select(fromNotes.selectCurrentNoteId))
  currentNote$ = this.store.pipe(select(fromNotes.selectCurrentNote));
  firstNote$: Observable<NoteItem>;
  noteIds$ = this.store.pipe(select(fromNotes.selectNoteIds));

  mutations$ = this.actions$
  .pipe(
    filter(action =>
      action.type === NotesActionTypes.Add
      || action.type === NotesActionTypes.Update
      || action.type === NotesActionTypes.Delete
    )
  );

	constructor(
    private store: Store<NotesState>,
    private actions$: ActionsSubject,
    private route: ActivatedRoute
    ) {}

	load() {
    this.store.dispatch(new Load());
  }

  selectNote(noteId: string) {
    this.store.dispatch(new Selected(noteId));
  }

  add(note) {
		this.store.dispatch(new Add(note));
  }

	update(note) {
		this.store.dispatch(new Update(note));
  }

  getNotes(): Observable<NoteItem[]> {
    this.load();
    return this.allNotes$;
  }
}

