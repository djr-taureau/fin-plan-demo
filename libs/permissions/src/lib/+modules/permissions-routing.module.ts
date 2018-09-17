import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionsPageComponent } from '../pages';
import { PermissionsPageHeaderComponent } from '../components';
import { PageViewComponent } from '@lifeworks/ui-components/page-layouts';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'permissions',
				component: PageViewComponent,
				data: {
					title: 'Permissions',
				},
				children: [
					{
						path: '',
						component: PermissionsPageHeaderComponent,
						outlet: 'page-header'
					},
					{
						path: '',
						pathMatch: 'full',
						component: PermissionsPageComponent,
					}
				]
			}
		])
	],
	exports: [RouterModule]
})
export class PermissionsRoutingModule {}
