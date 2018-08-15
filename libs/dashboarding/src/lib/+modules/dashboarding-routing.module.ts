import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticatedGuard } from '@lifeworks/authentication';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: DashboardComponent,
				canActivate: [AuthenticatedGuard]
			}
		])
	],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
