import { NgModule } from '@angular/core';

import {
	DashboardingCoreModule,
	DashboardRoutingModule,
	DashboardingUIModule
} from './+modules';

import {
	DashboardClientComponent,
	DashboardAdvisorComponent,
	DashboardManagerComponent,
	DashboardComplianceComponent
} from './pages';

import {
	DashboardRouterComponent,
	DashboardSelectorComponent,
	DashboardHeaderComponent
} from './components';
import { DashboardRolePipe } from './dashboard-role.pipe';

@NgModule({
	imports: [
		DashboardingCoreModule,
		DashboardRoutingModule,
		DashboardingUIModule
	],
	declarations: [
		DashboardRouterComponent,
		DashboardClientComponent,
		DashboardAdvisorComponent,
		DashboardManagerComponent,
		DashboardComplianceComponent,
		DashboardSelectorComponent,
		DashboardRolePipe,
		DashboardHeaderComponent
	]
})
export class DashboardingModule {}
