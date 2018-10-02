import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { UiComponentsButtonsModule } from '@lifeworks/ui-components/buttons';
import { UiComponentsAttachmentModule } from '@lifeworks/ui-components/attachment';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		FileDropModule,
		UiComponentsButtonsModule,
		UiComponentsAttachmentModule
	],
	exports: [FileUploadComponent],
	declarations: [
		FileUploadComponent,
	]
})
export class UiComponentsFileUploadModule {}
