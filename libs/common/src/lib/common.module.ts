import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { NiceDatePipe } from './date';
import { ReplacePipe } from './text';

@NgModule({
	imports: [NgCommonModule],
	declarations: [NiceDatePipe, ReplacePipe],
	exports: [NiceDatePipe, ReplacePipe]
})
export class CommonModule {}
