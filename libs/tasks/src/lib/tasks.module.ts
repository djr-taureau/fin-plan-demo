import { NgModule } from '@angular/core';
import {
  TasksCoreModule,
  TasksRoutingModule,
  TasksStateModule,
  TasksUiModule
} from './+modules';
import { TasksPageComponent } from './pages';
import {
  TasksHeaderComponent,
  TasksListComponent,
  TasksWidgetComponent
} from './components';
import {
  TaskImagePipe,
  TaskLinkPipe
} from './pipes';



@NgModule({
	imports: [
    TasksCoreModule,
		TasksRoutingModule,
		TasksStateModule,
		TasksUiModule
	],
	declarations: [
    TasksPageComponent,
    TasksHeaderComponent,
		TasksListComponent,
    TasksWidgetComponent,
    TaskImagePipe,
    TaskLinkPipe
  ],
  exports: [
    TasksPageComponent,
    TasksWidgetComponent

  ],
  entryComponents: []
})
export class TasksModule {}
