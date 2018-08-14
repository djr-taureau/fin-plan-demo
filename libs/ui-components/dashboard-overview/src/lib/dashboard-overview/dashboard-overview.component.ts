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
	selector: 'lw-dashboard-overview',
	templateUrl: './dashboard-overview.component.html',
	styleUrls: ['./dashboard-overview.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DashboardOverviewComponent implements OnInit {
	@Input() theme: string;
	elementName = 'lw-dashboard-overview';

	constructor() {}

	@HostBinding('class') classes = '';

	ngOnInit() {
		this.classes = classWithModifiers(this.elementName, this.theme);
	}
}

@Directive({
	selector: 'lw-dashboard-overview-description',
	host: { class: 'lw-dashboard-overview-description' }
})
export class DashboardOverviewDescriptionDirective {}
