import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientsPageComponent } from '../pages';
import { ClientsPageHeaderComponent } from '../components';
import { PageViewComponent } from '@lifeworks/ui-components/page-layouts';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'clients',
				component: PageViewComponent,
				data: {
					title: 'Clients',
				},
				children: [
					{
						path: '',
						component: ClientsPageHeaderComponent,
						outlet: 'page-header'
					},
					{
						path: '',
						pathMatch: 'full',
						component: ClientsPageComponent,
					}
				]
			}
		])
	],
	exports: [RouterModule]
})
export class ClientsRoutingModule {}
