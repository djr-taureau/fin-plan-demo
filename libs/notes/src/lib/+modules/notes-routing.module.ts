import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { PageComponent } from '@lifeworks/ui-components/layouts';
import { NotesListPageComponent } from '../pages';
import {
  DialogHostComponent,
  NotesNavigationComponent,
  NotesListNavigationComponent,
  NotesHeaderComponent
} from '../components';

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
                  queryParams: { filter: 'type=1' }
								},
								{
									display: 'Team',
									count: 32,
									order: 2,
                  location: ['/notes/team'],
                  queryParams: { filter: 'type=2' }
								},
								{
									display: 'Clients',
									count: 53,
									order: 3,
                  location: ['/notes/clients'],
                  queryParams: { filter: 'type=3' }
                },
                {
									display: 'All',
									count: 103,
									order: 4,
                  location: ['/notes/all'],
                  queryParams: { filter: 'type=4' }
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
            data: { pageLayout: 'detailWithLeftSidebar' },
            children: [
              {
                path: '',
                outlet: 'page-subheader',
                component: NotesHeaderComponent
              },
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
                path: '',
                component: NotesListPageComponent,
              },
            ]
          },
          {
            path: 'team',
            data: { pageLayout: 'fullWithLeftSidebar' },
            children: [
              {
                path: '',
                outlet: 'page-subheader',
                component: NotesHeaderComponent
              },
              {
                path: '',
                outlet: 'page-sidebar',
                component: NotesListNavigationComponent
              },
              {
                path: '',
                redirectTo: 'team'
              },
              {
                path: '',
                component: NotesListPageComponent,
              },
            ]
          },
          {
            path: 'clients',
            data: { pageLayout: 'fullWithLeftSidebar' },
            children: [
              {
                path: '',
                outlet: 'page-subheader',
                component: NotesHeaderComponent
              },
              {
                path: '',
                outlet: 'page-sidebar',
                component: NotesListNavigationComponent
              },
              {
                path: '',
                redirectTo: 'clients'
              },
              {
                path: '',
                component: NotesListPageComponent,
              },
            ]
          },
          {
            path: 'all',
            data: { pageLayout: 'fullWithLeftSidebar' },
            children: [
              {
                path: '',
                outlet: 'page-subheader',
                component: NotesHeaderComponent
              },
              {
                path: '',
                outlet: 'page-sidebar',
                component: NotesListNavigationComponent
              },
              {
                path: '',
                redirectTo: 'all'
              },
              {
                path: '',
                component: NotesListPageComponent,
              },

            ]
          },
				]
      },
      { path: 'addNote', component: DialogHostComponent },
      { path: 'addNote', component: DialogHostComponent, outlet: 'dialog' },
    ])
  ],
	exports: [RouterModule]
})
export class NotesRoutingModule {}



