//tslint:disable:use-host-property-decorator use-input-property-decorator
import {
	Component,
	OnInit,
	Input,
	ViewEncapsulation,
	ElementRef
} from '@angular/core';
import {
	mixinTextColor,
	HasColor,
	ComponentHostBase
} from '@lifeworks/ui-components';

export const _DashboardOverviewValueCalloutBase = mixinTextColor(
	ComponentHostBase
);

@Component({
	selector: 'lw-value-callout-item',
	templateUrl: './value-callout-item.component.html',
	inputs: ['color', 'displayType'],
	styleUrls: ['./value-callout-item.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DashboardOverviewValueCalloutComponent extends _DashboardOverviewValueCalloutBase
	implements HasColor, OnInit {
	displayType = 'horizontal';

	classes = '';

	constructor(elementRef: ElementRef) {
		super(elementRef);
	}

	ngOnInit() {
		this.classes = `lw-value-callout-item-main-${this.displayType}`;
	}
}
