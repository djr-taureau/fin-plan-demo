import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticatedGuard } from '@lifeworks/authentication';
import {
	DashboardRouterComponent,
	DashboardSelectorComponent
} from '../components';
import {
	DashboardClientComponent,
	DashboardAdvisorComponent,
	DashboardManagerComponent,
	DashboardComplianceComponent
} from '../pages';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: DashboardSelectorComponent,
				outlet: 'shell-top'
			},
			{
				path: '',
				canActivate: [AuthenticatedGuard],
				children: [
					{
						path: '',
						pathMatch: 'full',
						component: DashboardRouterComponent
					},
					{
						path: 'dashboard/advisor',
						component: DashboardAdvisorComponent
					},
					{
						path: 'dashboard/client',
						component: DashboardClientComponent
					},
					{
						path: 'dashboard/manager',
						component: DashboardManagerComponent
					},
					{
						path: 'dashboard/compliance',
						component: DashboardComplianceComponent
					}
				]
			}
		])
	],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
