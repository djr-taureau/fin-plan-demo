import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { PageComponent } from '@lifeworks/ui-components/layouts';
import
{
  NotesListPageComponent,
  PersonalListPageComponent,
  TeamListPageComponent,
  ClientsListPageComponent,
 } from '../pages';
import { NotesNavigationComponent, NotesListNavigationComponent } from '../components';
import { DialogHostComponent } from '../components';

@NgModule({
	imports: [
		RouterModule.forChild([
      {
				path: 'notes',
				component: PageComponent,
				data: {
					title: 'Notes'
				},
				children: [
					{
						path: '',
						component: NotesNavigationComponent,
						outlet: 'page-header',
						data: {
							pageNavigation: [
								{
									display: 'Personal',
									count: 16,
									order: 1,
                  location: ['/notes/personal'],
								},
								{
									display: 'Team',
									count: 32,
									order: 2,
                  location: ['/notes/team'],
								},
								{
									display: 'Clients',
									count: 53,
									order: 3,
                  location: ['/notes/clients'],
                },
                {
									display: 'All',
									count: 103,
									order: 4,
                  location: ['/notes/all'],
								}
							]
						}
					},
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'personal'
          },
          {
            path: 'personal',
            data: { pageLayout: 'almostFullWithLeftSidebar' },
            children: [
              {
                path: '',
                outlet: 'page-sidebar',
                component: NotesListNavigationComponent
              },
              {
                path: '',
                redirectTo: 'personal'
              },
              {
                path: 'personal',
                component: PersonalListPageComponent,
              },
              {
                path: 'notes/:id',
                component: PersonalListPageComponent,
              }
            ]
          },
					{
						path: 'team',
						component: TeamListPageComponent
					},
					{
						path: 'clients',
						component: ClientsListPageComponent
          },
          {
						path: 'all',
						component: NotesListPageComponent
          },
          {
            path: 'notes/:id',
            component: NotesListPageComponent,
          }
				]
      },
      { path: 'notes/:id', component: NotesListPageComponent },
      { path: 'addNote', component: DialogHostComponent },
      { path: 'addNote', component: DialogHostComponent, outlet: 'dialog' },
    ])
  ],
	exports: [RouterModule]
})
export class NotesRoutingModule {}



