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
  providers: [],
  entryComponents: [DialogHostComponent, NotesFormDialogComponent]
})
export class NotesModule {}
