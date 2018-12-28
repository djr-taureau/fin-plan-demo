import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { dissoc } from 'ramda';

import {
	NotesActions,
	NotesActionTypes,
	Load,
	LoadSuccess,
  LoadFailure,
  Add,
	AddSuccess,
	AddFailure,
	Update,
	UpdateSuccess,
  UpdateFailure,
  Delete,
  DeleteSuccess
} from './notes.actions';
import { NotesState } from './notes.interfaces';
import { NoteItem } from '../models/note-item';
import { NotesApi } from '../services/notes-api.service';


@Injectable()
export class NotesEffects {
	@Effect()
	loadNotes$ = this.dataPersistence.fetch(
		NotesActionTypes.Load,
		{
			run: (action: Load, state: NotesState) =>
				this.notesApiService
					.get()
					.pipe(
						map(
							results =>
								new LoadSuccess(
									results.results,
									dissoc('results', results)
								)
						)
					),
			onError: (action: NotesActions, error) =>
        new LoadFailure(error)
		}
  );

  @Effect()
  addNote$ = this.dataPersistence.optimisticUpdate(
    NotesActionTypes.Add,
    {
    run: (action: Add, state: NotesState) =>
      {
        return this.notesApiService
          .create(action.payload.note)
          .pipe(
            map(
              (note: NoteItem) => new AddSuccess(note)
            )
          )
      },
    undoAction: (action: NotesActions, error) =>
      new AddFailure(error)
    }
  );

	@Effect()
	updateNote$ = this.dataPersistence.optimisticUpdate(
		NotesActionTypes.Update,
		{
			run: (action: Update, state: NotesState) =>
				this.notesApiService
					.update(action.payload)
					.pipe(map(results => new UpdateSuccess(action.payload))),

			undoAction: (action: NotesActions, error) =>
				new UpdateFailure(error)
		}
  );

  // @Effect()
  // deleteNote$ = this.dataPersistence.pessimisticUpdate(NotesActionTypes.Delete, {
  //   run: (action: Delete, state: NotesState) => {
  //     return this.notesApiService.delete(action.payload).pipe(map(_ => new DeleteSuccess(action.payload)))
  //   },

  //   onError: (action: Delete, error) => {
  //     console.error('Error', error);
  //   }
  // });

	constructor(
		private actions$: Actions,
		private dataPersistence: DataPersistence<NotesState>,
		private notesApiService: NotesApi
	) {}
}
