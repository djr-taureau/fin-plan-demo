import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import {
	NotesCoreModule,
	NotesRoutingModule,
	NotesStateModule,
	NotesUIModule
} from './+modules';
import {
  NotesListPageComponent,
} from './pages';
import {
  NotesHeaderComponent,
  NotesNavigationComponent,
  NotesListNavigationComponent,
  NotesFormComponent,
  NotesFormDialogComponent,
  DialogHostComponent,
} from './components';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@NgModule({
	imports: [
		NotesCoreModule,
		NotesRoutingModule,
		NotesStateModule,
    NotesUIModule,
	],
	declarations: [
    NotesHeaderComponent,
    NotesListPageComponent,
    NotesNavigationComponent,
    NotesListNavigationComponent,
    NotesFormComponent,
    NotesFormDialogComponent,
    DialogHostComponent,
  ],
  exports: [
    NotesFormDialogComponent,
    DialogHostComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  entryComponents: [DialogHostComponent, NotesFormDialogComponent]
})
export class NotesModule {}
