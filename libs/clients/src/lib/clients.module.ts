import { NgModule } from '@angular/core';
import {
	ClientsCoreModule,
	ClientsRoutingModule,
	ClientsUIModule,
	ClientsStateModule
} from './+modules';

import {
	ClientsPageComponent
} from './pages';
import { ClientsPageHeaderComponent, ClientsTableComponent } from './components';

@NgModule({
	imports: [
		ClientsCoreModule,
		ClientsRoutingModule,
		ClientsUIModule,
		ClientsStateModule
	],
	declarations: [
		ClientsPageComponent,
		ClientsPageHeaderComponent,
		ClientsTableComponent
	],
	entryComponents: []
})
export class ClientsModule {}
