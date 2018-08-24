//tslint:disable:use-input-property-decorator use-host-property-decorator
import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import {
	ComponentHostBase,
	mixinNavigation,
	HasNavigation
} from '@lifeworks/ui-components';

export const _NavigationItemBase = mixinNavigation(ComponentHostBase);

@Component({
	selector: 'lw-navigation-item',
	inputs: ['location', 'wrapWithAnchor'],
	templateUrl: './navigation-item.component.html',
	styleUrls: ['./navigation-item.component.scss'],
	host: { class: 'lw-navigation-item' },
	encapsulation: ViewEncapsulation.None
})
export class NavigationItemComponent extends _NavigationItemBase
	implements HasNavigation {
	constructor(public _elementRef: ElementRef) {
		super(_elementRef);
	}
}
