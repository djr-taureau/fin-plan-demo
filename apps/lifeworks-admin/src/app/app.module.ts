import { NgModule } from '@angular/core';

import {
	AppCoreModule,
	AppRoutingModule,
	AppStateModule,
	AppUIModule,
	AppProvidersModule
} from './+modules';

import { AppComponent } from './app.component';
import {
	UsersPageComponent,
	AccountsPageComponent,
	AccountsBillingPageComponent,
	AccountsFirmPageComponent,
	AccountsHeaderComponent,
	AccountsUsersPageComponent,
	AccountsMenuComponent
} from './pages';

@NgModule({
	declarations: [
		AppComponent,
		UsersPageComponent,
		AccountsPageComponent,
		AccountsBillingPageComponent,
		AccountsFirmPageComponent,
		AccountsHeaderComponent,
		AccountsUsersPageComponent,
		AccountsMenuComponent
	],
	imports: [
		AppCoreModule,
		AppRoutingModule,
		AppStateModule,
		AppUIModule,
		AppProvidersModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
