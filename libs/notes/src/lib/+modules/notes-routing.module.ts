import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment, Router, Route, Params} from '@angular/router';
import { PageComponent } from '@lifeworks/ui-components/layouts';
import { NotesListPageComponent } from '../pages';
import { NotesHeaderComponent } from '../components';
import { NotesFormComponent } from '../components';
import { DialogHostComponent } from '../components';

@NgModule({
	imports: [
		RouterModule.forChild([
      { path: 'notes', component: PageComponent,
          children: [
            { path: '', outlet: 'page-header', component: NotesHeaderComponent},
            { path: '', component: NotesListPageComponent },
          ]
      },
      { path: 'addNote', component: DialogHostComponent },
      { path: 'addNote', component: DialogHostComponent, outlet: 'dialog' },
		  ])
	  ],
	exports: [RouterModule]
})
export class NotesRoutingModule {}
