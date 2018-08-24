import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginCallbackComponent, LogoutComponent } from '../pages';

@NgModule({
	imports: [
		NgCommonModule,
		RouterModule.forChild([
			{
				path: 'processing-login',
				pathMatch: 'full',
				component: LoginCallbackComponent
			},
			{ path: 'logout', pathMatch: 'full', component: LogoutComponent }
		])
	],
	exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
