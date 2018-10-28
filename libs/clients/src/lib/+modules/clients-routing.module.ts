import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
	ClientsListPageComponent,
	ClientProfilePageComponent,
	ClientDataPageComponent,
	ClientPlanningPageComponent,
	ClientActivityPageComponent,
	ClientDocumentsPageComponent,
	ClientSalesPageComponent,
	ClientDataStepPageComponent,
} from '../pages';
import {
	ClientsPageHeaderComponent,
	ClientDetailHeaderComponent,
	ClientActivityHeaderComponent,
	ClientProfileHeaderComponent,
	ClientDataHeaderComponent,
	ClientsModuleBarComponent
} from '../components';
import { PageComponent } from '@lifeworks/ui-components/layouts';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'clients',
				component: PageComponent,
				data: {
					title: 'Clients'
				},
				children: [
					{
						path: '',
						pathMatch: 'full',
						children: [
							{
								path: '',
								component: ClientsPageHeaderComponent,
								outlet: 'page-header',
								data: {
									pageNavigation: [
										{
											display: 'Clients',
											count: 16,
											order: 1,
											location: '/clients'
										},
										{
											display: 'Prospects',
											count: 8,
											order: 2,
											location: '/clients',
											queryParams: { filter: 'type=2' }
										},
										{
											display: 'Inactive',
											count: 3,
											order: 3,
											location: '/clients',
											queryParams: { filter: 'type=3' }
										}
									]
								}
							},
							{
								path: '',
								component: ClientsListPageComponent
							}
						]
					},
					{
						path: ':id',
						children: [
							{
								path: '',
								component: ClientDetailHeaderComponent,
								outlet: 'page-header',
								data: {
									pageNavigation: [
										{
											display: 'Overview',
											order: 1,
											location: '/clients'
										},
										{
											display: 'Data',
											order: 2,
											location: '/clients/1/data'
										},
										{
											display: 'Planning',
											order: 3,
											location: '/clients/1/planning'
										},
										{
											display: 'Activity',
											order: 4,
											location: '/clients/1/activity'
										},
										{
											display: 'Documents',
											order: 5,
											location: '/clients/1/documents'
										}
									]
								}
							},
							{
								path: '',
								pathMatch: 'full',
								children: [
									{
										path: '',
										outlet: 'page-subheader',
										component: ClientProfileHeaderComponent
									},
									{
										path: '',
										component: ClientProfilePageComponent
									},
								]
							},
							{
								path: 'data',
								data: { pageLayout: 'almostFullWithLeftSidebar' },
								children: [
									{
										path: '',
										outlet: 'page-subheader',
										component: ClientDataHeaderComponent
									},
									{
										path: '',
										outlet: 'page-sidebar',
										component: ClientsModuleBarComponent
									},
									{
										path: '',
										redirectTo: 'start'
									},
									{
										path: 'start',
										component: ClientDataPageComponent,
									},
									{
										path: 'estate-planning/:step',
										data: { pageLayout: 'fullWithLeftSidebar' },
										component: ClientDataStepPageComponent,
									},
								]
							},
							{
								path: 'planning',
								component: ClientPlanningPageComponent
							},
							{
								path: 'activity',
								children: [
									{
										path: '',
										outlet: 'page-subheader',
										component: ClientActivityHeaderComponent
									},
									{
										path: '',
										component: ClientActivityPageComponent
									},
								]
							},
							{
								path: 'documents',
								component: ClientDocumentsPageComponent
							},
							{
								path: 'sales',
								component: ClientSalesPageComponent
							}
						]
					}
				]
			}
		])
	],
	exports: [RouterModule]
})
export class ClientsRoutingModule {}
