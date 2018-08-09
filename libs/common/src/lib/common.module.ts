import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { NiceDatePipe } from './date';
import { ReplacePipe, HydrateTemplatePipe } from './text';
import { LinkToDirective } from './directives';

@NgModule({
	imports: [NgCommonModule],
	declarations: [
		NiceDatePipe,
		ReplacePipe,
		HydrateTemplatePipe,
		LinkToDirective
	],
	exports: [NiceDatePipe, ReplacePipe, HydrateTemplatePipe, LinkToDirective]
})
export class CommonModule {}
