import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { NiceDatePipe } from './date';
import { ReplacePipe } from './text';
import { LinkToDirective } from './directives';

@NgModule({
	imports: [NgCommonModule],
	declarations: [NiceDatePipe, ReplacePipe, LinkToDirective],
	exports: [NiceDatePipe, ReplacePipe, LinkToDirective]
})
export class CommonModule {}
