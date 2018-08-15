//tslint:disable:component-selector component-class-suffix use-input-property-decorator
import { Component, ElementRef, Input, HostBinding } from '@angular/core';
import {
	mixinTextColor,
	mixinIconColor,
	HasTextColor,
	HasIconColor
} from '../../behaviors';

export class PageLinkBase {
	constructor(public _elementRef: ElementRef) {}
}
export const _PageLinkBase = mixinTextColor(mixinIconColor(PageLinkBase));

@Component({
	selector: '[lwPageLink]',
	inputs: ['color', 'iconColor'],
	template: '<ng-content></ng-content>',
	styleUrls: ['./page-link.component.scss']
})
export class PageLinkComponent extends _PageLinkBase
	implements HasTextColor, HasIconColor {
	@HostBinding('class.no-icon')
	@Input()
	noIcon = false;

	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
