import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';

@NgModule({
	imports: [
		RouterModule.forChild([{
            path: '',
            pathMatch: 'full',
            component: DashboardPageComponent,
            data: { title: 'Dashboard' }
        }])
	],
	exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
