import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from '@lifeworks/ui-components/layouts';

import { NotificationsPageComponent } from '../pages';
import { NotificationsHeaderComponent } from '../components';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'notifications',
				component: PageComponent,
				children: [
					{
						path: '',
						outlet: 'page-header',
						component: NotificationsHeaderComponent
					},
					{ path: '', component: NotificationsPageComponent }
				]
			}
		])
	],
	exports: [RouterModule]
})
export class NotificationsRoutingModule {}
