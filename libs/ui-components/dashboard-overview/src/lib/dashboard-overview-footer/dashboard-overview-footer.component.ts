import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { classWithModifiers } from '@lifeworks/common';

@Component({
	selector: 'lw-dashboard-overview-footer',
	templateUrl: './dashboard-overview-footer.component.html',
	styleUrls: ['./dashboard-overview-footer.component.scss']
})
export class DashboardOverviewFooterComponent implements OnInit {
	@Input() arrow: string;
	elementName = 'lw-dashboard-overview-footer';

	constructor() {}

	@HostBinding('class') classes = '';

	ngOnInit() {
		this.classes = classWithModifiers(this.elementName, this.arrow);
	}
}
