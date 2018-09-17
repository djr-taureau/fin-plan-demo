import { NgModule } from '@angular/core';
import {
	PermissionsCoreModule,
	PermissionsRoutingModule,
	PermissionsUIModule,
	PermissionsStateModule
} from './+modules';

import {
	PermissionsPageComponent,
	CreatePermissionPageComponent
} from './pages';
import { PermissionsPageHeaderComponent, PermissionsTableComponent } from './components';
import { PermissionsScopePipe } from './pipes';

@NgModule({
	imports: [
		PermissionsCoreModule,
		PermissionsRoutingModule,
		PermissionsUIModule,
		PermissionsStateModule
	],
	declarations: [
		PermissionsPageComponent,
		PermissionsPageHeaderComponent,
		CreatePermissionPageComponent,
		PermissionsScopePipe,
		PermissionsTableComponent
	],
	entryComponents: [CreatePermissionPageComponent]
})
export class PermissionsModule {}
