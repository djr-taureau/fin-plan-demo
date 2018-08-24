import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
	AuthenticationRoutingModule,
	AuthenticationStateModule
} from './+modules';
import { AUTH_CONFIG } from './providers';
import { AuthService, UserService, HttpAuthTokenInterceptor } from './services';
import { AuthenticatedGuard } from './guards';
import { LoginCallbackComponent, LogoutComponent } from './pages';

@NgModule({
	imports: [
		NgCommonModule,
		AuthenticationRoutingModule,
		AuthenticationStateModule
	],
	declarations: [LoginCallbackComponent, LogoutComponent],
	providers: [AuthenticatedGuard, UserService]
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
