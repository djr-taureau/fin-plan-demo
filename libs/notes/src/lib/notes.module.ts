import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import {
	NotesCoreModule,
	NotesRoutingModule,
	NotesStateModule,
	NotesUIModule
} from './+modules';
import { NotesPageComponent } from './pages';
import {
	NotesWidgetComponent,
	NotesListComponent,
  NotesHeaderComponent,
  NotesFormComponent,
  DialogHostComponent,
} from './components';

import { NoteLinkPipe, NoteImagePipe } from './pipes';

@NgModule({
	imports: [
		NotesCoreModule,
		NotesRoutingModule,
		NotesStateModule,
		NotesUIModule
	],
	declarations: [
		NotesPageComponent,
		NotesWidgetComponent,
		NoteLinkPipe,
		NoteImagePipe,
		NotesListComponent,
		NotesHeaderComponent,
    NotesHeaderComponent,
    NotesFormComponent,
    DialogHostComponent,
  ],
  exports: [
    NotesPageComponent,
    NotesWidgetComponent,
    NotesFormComponent,
    DialogHostComponent
  ],
  entryComponents: [DialogHostComponent, NotesFormComponent]
})
export class NotesModule {}
