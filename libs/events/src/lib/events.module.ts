import { NgModule } from '@angular/core';
import {
  EventsCoreModule,
  EventsRoutingModule,
  EventsStateModule,
  EventsUiModule
} from './+modules';

import { TasksPageComponent } from './pages';

import {
  TasksHeaderComponent,
  TasksListComponent,
  TasksWidgetComponent,
  DialogHostComponent,
  TodosFormDialogComponent,
} from './components';

import {
  EventImagePipe,
  EventLinkPipe
} from './pipes';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@NgModule({
	imports: [
    EventsCoreModule,
		EventsRoutingModule,
		EventsStateModule,
		EventsUiModule
	],
	declarations: [
    TasksPageComponent,
    TasksHeaderComponent,
		TasksListComponent,
    TasksWidgetComponent,
    TodosFormDialogComponent,
    DialogHostComponent,
    EventImagePipe,
    EventLinkPipe
  ],
  exports: [
    TasksPageComponent,
    TasksWidgetComponent

  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  entryComponents: [DialogHostComponent, TodosFormDialogComponent]
})
export class EventsModule {}
