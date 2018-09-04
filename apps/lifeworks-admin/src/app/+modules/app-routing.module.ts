import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationRoutes } from '../configs';

@NgModule({
	imports: [
		RouterModule.forRoot(ApplicationRoutes, {
			initialNavigation: 'enabled'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
