import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthCardComponent } from './auth-card/auth-card.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { AuthService } from './auth.service';
import { AUTH_PROVIDER, AuthProvider, AUTH_CONFIG } from './auth-provider';
import { HttpAuthTokenInterceptor } from './http-auth-token-interceptor';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'processing-login',
				pathMatch: 'full',
				component: LoginCallbackComponent
			},
			{ path: 'logout', pathMatch: 'full', component: LogoutComponent }
		])
	],
	declarations: [AuthCardComponent, LoginCallbackComponent, LogoutComponent],
	exports: [AuthCardComponent],
	providers: [AuthenticatedGuard]
})
export class AuthenticationModule {
	static forRoot(config: any = {}): ModuleWithProviders {
		return {
			ngModule: AuthenticationModule,
			providers: [
				AuthService,
				{ provide: AUTH_CONFIG, useValue: config },
				{
					provide: HTTP_INTERCEPTORS,
					useClass: HttpAuthTokenInterceptor,
					multi: true
				}
			]
		};
	}
}
