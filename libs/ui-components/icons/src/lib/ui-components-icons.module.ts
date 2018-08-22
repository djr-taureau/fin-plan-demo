import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempSvgIconComponent } from './temp-svg-icon/temp-svg-icon.component';
import { InlineCaretDirective } from './inline-caret/inline-caret.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [TempSvgIconComponent, InlineCaretDirective],
	exports: [TempSvgIconComponent, InlineCaretDirective]
})
export class UiComponentsIconsModule {}
