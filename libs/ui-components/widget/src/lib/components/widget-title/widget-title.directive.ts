//tslint:disable:use-host-property-decorator use-input-property-decorator
import { Directive, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import {
	TextColorPalette,
	mixinTextColor,
	HasTextColor
} from '@lifeworks/ui-components/core';

const DEFAULT_SUBTITLE_COLOR = 'orange';

export class WidgetTitleBase {
	constructor(public _elementRef: ElementRef) {}
}
export const _WidgetTitleBase = mixinTextColor(WidgetTitleBase);

@Directive({
	selector: 'lw-widget-title, [lwWidgetTitle]',
	inputs: ['color'],
	host: { class: 'lw-widget-title' }
})
export class WidgetTitleDirective extends _WidgetTitleBase
	implements HasTextColor {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}

export const _WidgetSubtitleBase = mixinTextColor(
	WidgetTitleBase,
	DEFAULT_SUBTITLE_COLOR
);
@Directive({
	selector: 'lw-widget-subtitle, [lwWidgetSubtitle]',
	inputs: ['color'],
	host: { class: 'lw-widget-subtitle' }
})
export class WidgetSubtitleDirective extends _WidgetSubtitleBase
	implements HasTextColor {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
