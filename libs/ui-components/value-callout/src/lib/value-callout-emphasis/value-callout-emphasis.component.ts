//tslint:disable: use-host-property-decorator directive-selector
//tslint:disable:use-host-property-decorator use-input-property-decorator
import { Component, HostBinding, ElementRef } from '@angular/core';
import {
	mixinTextColor,
	HasColor,
	ComponentHostBase
} from '@lifeworks/ui-components';

export const _DashboardOverviewEmphasisBase = mixinTextColor(ComponentHostBase);

@Component({
	selector: 'lw-value-callout-emphasis',
	templateUrl: './value-callout-emphasis.component.html',
	inputs: ['color'],
	styleUrls: ['./value-callout-emphasis.component.scss'],
	host: { class: 'lw-value-callout-emphasis' }
})
export class DashboardOverviewEmphasisComponent extends _DashboardOverviewEmphasisBase
	implements HasColor {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
