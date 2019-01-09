import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment, Router, Route, Params} from '@angular/router';
import { PageComponent } from '@lifeworks/ui-components/layouts';
import { TasksPageComponent } from '../pages';
import { TasksHeaderComponent, TasksListComponent } from '../components';


import { DialogHostComponent } from '../components';

@NgModule({
	imports: [
		RouterModule.forChild([
      { path: 'events', component: PageComponent,
        data: { title: 'To Dos' },
        children: [
          {
          path: '',
          pathMatch: 'full',
          children: [
            { path: '', outlet: 'page-header', component: TasksHeaderComponent},
            { path: '', component: TasksPageComponent },
            { path: '', component: TasksListComponent }
          ]
        }
        ]
      },

			{ path: 'addTodo', component: DialogHostComponent },
		  ])
	  ],
	exports: [RouterModule]
})
export class EventsRoutingModule {}
