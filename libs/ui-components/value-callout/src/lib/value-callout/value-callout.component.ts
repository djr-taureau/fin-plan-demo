//tslint:disable: use-host-property-decorator directive-selector
import {
	Component,
	OnInit,
	Directive,
	ViewEncapsulation,
	Input,
	HostBinding
} from '@angular/core';
import { classWithModifiers } from '@lifeworks/common';
@Component({
	selector: 'lw-value-callout',
	templateUrl: './value-callout.component.html',
	styleUrls: ['./value-callout.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DashboardOverviewComponent implements OnInit {
	@Input() theme: string;
	elementName = 'lw-value-callout';

	constructor() {}

	@HostBinding('class') classes = '';

	ngOnInit() {
		this.classes = classWithModifiers(this.elementName, this.theme);
	}
}
