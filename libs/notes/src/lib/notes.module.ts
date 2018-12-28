import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import {
	NotesCoreModule,
	NotesRoutingModule,
	NotesStateModule,
	NotesUIModule
} from './+modules';
import { NotesListPageComponent } from './pages';
import {
  NotesHeaderComponent,
  NotesTableComponent,
  NotesFormComponent,
  DialogHostComponent,
  NotesListComponent,
  NotesWidgetComponent,
} from './components';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
	imports: [
		NotesCoreModule,
		NotesRoutingModule,
		NotesStateModule,
    NotesUIModule,
    NgxMaterialTimepickerModule.forRoot()
	],
	declarations: [
		NotesListPageComponent,
    NotesHeaderComponent,
    NotesTableComponent,
    NotesFormComponent,
    NotesListComponent,
    NotesWidgetComponent,
    DialogHostComponent,
  ],
  exports: [
    NotesFormComponent,
    DialogHostComponent
  ],
  providers: [],
  entryComponents: [DialogHostComponent, NotesFormComponent]
})
export class NotesModule {}
