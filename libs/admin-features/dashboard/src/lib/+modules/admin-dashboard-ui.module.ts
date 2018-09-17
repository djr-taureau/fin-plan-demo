import { NgModule } from '@angular/core';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';

const MODULES = [UiComponentsCoreModule];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class AdminDashboardUIModule {}
