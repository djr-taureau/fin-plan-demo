import { NgModule } from '@angular/core';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsLayoutsModule } from '@lifeworks/ui-components/layouts';

const MODULES = [UiComponentsCoreModule,
	UiComponentsLayoutsModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class AdminDashboardUIModule {}
