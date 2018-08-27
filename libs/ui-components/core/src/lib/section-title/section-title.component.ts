//tslint:disable: use-host-property-decorator directive-selector use-input-property-decorator

import {
	Component,
	Directive,
	OnInit,
	ElementRef,
	ViewEncapsulation
} from '@angular/core';
import { mixinColor, HasColor } from '../behaviors';
import { ComponentHostBase } from '../component-base';

export const SectionTitleBase = mixinColor(ComponentHostBase);
@Component({
	selector: 'lw-section-title',
	inputs: ['color'],
	templateUrl: './section-title.component.html',
	styleUrls: ['./section-title.component.scss'],
	host: { class: 'lw-section-title' },
	encapsulation: ViewEncapsulation.None
})
export class SectionTitleComponent extends SectionTitleBase
	implements HasColor {
	constructor(public _elementRef: ElementRef) {
		super(_elementRef);
	}
}

export const SectionSubTitleBase = mixinColor(ComponentHostBase);
@Component({
  selector: 'lw-section-subtitle',
  inputs: ['color'],
  template: '(<ng-content></ng-content>)',
  host: { class: 'lw-section-subtitle' },
	encapsulation: ViewEncapsulation.None
})
export class SectionSubTitleComponent extends SectionSubTitleBase
	implements HasColor {
	constructor(public _elementRef: ElementRef) {
		super(_elementRef);
	}
}
