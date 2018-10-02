import { NgModule } from '@angular/core';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsValueListModule } from '@lifeworks/ui-components/value-list';
import { UiComponentsBreadcrumbModule } from '@lifeworks/ui-components/breadcrumb';
import { UiComponentsStatusListModule } from '@lifeworks/ui-components/status-list';
import { UiComponentsFileUploadModule } from '@lifeworks/ui-components/file-upload';

const MODULES = [
	UiComponentsCoreModule,
	UiComponentsValueListModule,
	UiComponentsStatusListModule,
	UiComponentsBreadcrumbModule,
	UiComponentsFileUploadModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class SandboxUIModule {}
