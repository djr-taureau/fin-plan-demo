import { NgModule } from '@angular/core';

import {
	DashboardingCoreModule,
	DashboardRoutingModule,
	DashboardingUIModule
} from './+modules';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardAdvisorComponent } from './dashboard-advisor/dashboard-advisor.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardComplianceComponent } from './dashboard-compliance/dashboard-compliance.component';

@NgModule({
	imports: [
		DashboardingCoreModule,
		DashboardRoutingModule,
		DashboardingUIModule
	],
	declarations: [
		DashboardComponent,
		DashboardClientComponent,
		DashboardAdvisorComponent,
		DashboardManagerComponent,
		DashboardComplianceComponent
	]
})
export class DashboardingModule {}
