//tslint:disable:component-selector component-class-suffix use-input-property-decorator
import { Component, ElementRef, Input, HostBinding } from '@angular/core';
import {
	mixinTextColor,
	mixinIconColor,
	mixinCssModifiers,
	HasColor,
	HasIconColor
} from '../../behaviors';
import { ComponentHostBase } from '../../component-base';

export const _PageLinkBase = mixinTextColor(mixinIconColor(ComponentHostBase));

@Component({
	selector: '[lwPageLink]',
	inputs: ['color', 'iconColor'],
	template: '<ng-content></ng-content>',
	styleUrls: ['./page-link.component.scss']
})
export class PageLinkComponent extends _PageLinkBase
	implements HasColor, HasIconColor {
	@HostBinding('class.no-icon')
	@Input()
	noIcon = false;

	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
