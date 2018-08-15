import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsPageComponent } from '../pages';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'notifications',
				component: NotificationsPageComponent
			}
		])
	],
	exports: [RouterModule]
})
export class NotificationsRoutingModule {}
