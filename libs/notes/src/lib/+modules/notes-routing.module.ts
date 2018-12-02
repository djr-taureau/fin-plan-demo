import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment, Router, Route, Params} from '@angular/router';
import { PageComponent } from '@lifeworks/ui-components/layouts';
import { NotesPageComponent } from '../pages';
import { NotesHeaderComponent } from '../components';
import { NotesFormComponent } from '../components';
import { DialogHostComponent } from '../components';

@NgModule({
	imports: [
		RouterModule.forChild([
      { path: 'notes', component: PageComponent,
          children: [
            { path: '', outlet: 'page-header', component: NotesHeaderComponent},
            { path: '', component: NotesPageComponent },
          ]
      },
			{ path: 'addNote', component: DialogHostComponent },
		  ])
	  ],
	exports: [RouterModule]
})
export class NotesRoutingModule {}
