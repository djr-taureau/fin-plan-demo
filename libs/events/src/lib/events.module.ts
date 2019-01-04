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
  TasksWidgetComponent
} from './components';
import {
  EventImagePipe,
  EventLinkPipe
} from './pipes';



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
    EventImagePipe,
    EventLinkPipe
  ],
  exports: [
    TasksPageComponent,
    TasksWidgetComponent

  ],
  entryComponents: []
})
export class EventsModule {}
