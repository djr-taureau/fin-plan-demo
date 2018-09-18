import { NgModule } from '@angular/core';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsValueListModule } from '@lifeworks/ui-components/value-list';
import { UiComponentsBreadcrumbModule } from '@lifeworks/ui-components/breadcrumb';

const MODULES = [
	UiComponentsCoreModule,
	UiComponentsValueListModule,
	UiComponentsBreadcrumbModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class SandboxUIModule {}
