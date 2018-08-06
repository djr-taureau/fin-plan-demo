import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthenticatedGuard } from '@lifeworks/authentication';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardAdvisorComponent } from './dashboard-advisor/dashboard-advisor.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardComplianceComponent } from './dashboard-compliance/dashboard-compliance.component';
import { AuthenticationModule } from '@lifeworks/authentication';

@NgModule({
	imports: [
		CommonModule,
		AuthenticationModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: DashboardComponent,
				canActivate: [AuthenticatedGuard]
			}
		])
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
