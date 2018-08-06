import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './date';
import { ReplacePipe, PopulateMessageTemplatePipe } from './text';
@NgModule({
	imports: [CommonModule],
	declarations: [NiceDatePipe, ReplacePipe, PopulateMessageTemplatePipe],
	exports: [NiceDatePipe, ReplacePipe, PopulateMessageTemplatePipe]
})
export class CoreModule {}
