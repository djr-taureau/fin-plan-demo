import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { notesReducer } from '../+state/notes.reducer';
import { NotesEffects } from '../+state/notes.effects';
import { notesInitialState } from '../+state/notes.init';

@NgModule({
	imports: [
		StoreModule.forFeature('Notes', notesReducer, {
			initialState: notesInitialState
		}),
		EffectsModule.forFeature([NotesEffects])
	],
	declarations: [],
	providers: [NotesEffects]
})
export class NotesStateModule {}
