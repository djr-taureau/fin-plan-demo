import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { LinkToDirective } from './directives';

@NgModule({
	imports: [NgCommonModule],
	declarations: [LinkToDirective],
	exports: [LinkToDirective]
})
export class CommonModule {}
