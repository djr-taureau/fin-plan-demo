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
  PersonalListPageComponent,
  TeamListPageComponent,
  ClientsListPageComponent,
} from './pages';
import {
  NotesHeaderComponent,
  NotesNavigationComponent,
  NotesListNavigationComponent,
  NotesFormComponent,
  NotesListSidenavComponent,
  NotesFormDialogComponent,
  DialogHostComponent,
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
    NotesHeaderComponent,
    NotesListPageComponent,
    PersonalListPageComponent,
    TeamListPageComponent,
    ClientsListPageComponent,
    NotesNavigationComponent,
    NotesListNavigationComponent,
    NotesFormComponent,
    NotesListSidenavComponent,
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
