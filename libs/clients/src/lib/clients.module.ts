import { NgModule } from '@angular/core';
import {
	ClientsCoreModule,
	ClientsRoutingModule,
	ClientsUIModule,
	ClientsStateModule
} from './+modules';

import {
	ClientsListPageComponent,
	ClientProfilePageComponent,
	ClientDataPageComponent,
	ClientPlanningPageComponent,
	ClientActivityPageComponent,
	ClientDocumentsPageComponent,
	ClientSalesPageComponent,
	ClientDataStepPageComponent,
	ClientToolsPageComponent,
} from './pages';
import {
	ClientsPageHeaderComponent,
	ClientDetailHeaderComponent,
	ClientProfileHeaderComponent,
	ClientActivityHeaderComponent,
	ClientsTableComponent,
	ClientsModuleBarComponent,
	ClientDataHeaderComponent,
	ClientsBalanceSheetComponent,
	AddAccountButtonComponent,
	SplitButtonComponent,
	ClientPlanningHeaderComponent,
	ClientToolsHeaderComponent
} from './components';
import { ModuleStatusPipe, LinkStatusPipe } from './services';

@NgModule({
	imports: [
		ClientsCoreModule,
		ClientsRoutingModule,
		ClientsUIModule,
		ClientsStateModule
	],
	declarations: [
		ClientsListPageComponent,
		ClientsPageHeaderComponent,
		ClientDetailHeaderComponent,
		ClientsTableComponent,
		ClientProfilePageComponent,
		ClientDataPageComponent,
		ClientPlanningPageComponent,
		ClientActivityPageComponent,
		ClientDocumentsPageComponent,
		ClientSalesPageComponent,
		ClientActivityHeaderComponent,
		ClientProfileHeaderComponent,
		ClientsModuleBarComponent,
		ClientDataHeaderComponent,
		ClientsBalanceSheetComponent,
		ClientDataStepPageComponent,
		ClientPlanningHeaderComponent,
		ClientToolsHeaderComponent,
		SplitButtonComponent,
		AddAccountButtonComponent,
		ModuleStatusPipe,
		LinkStatusPipe,
		ClientToolsPageComponent
	],
	exports:[
		ModuleStatusPipe,
		LinkStatusPipe
	]
})
export class ClientsModule {}
