//tslint:disable: use-host-property-decorator directive-selector
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { classWithModifiers } from '@lifeworks/common';

@Component({
	selector: 'lw-dashboard-overview-emphasis',
	templateUrl: './dashboard-overview-emphasis.component.html',
	styleUrls: ['./dashboard-overview-emphasis.component.scss']
})
export class DashboardOverviewEmphasisComponent implements OnInit {
	@Input() arrow: string;

	@HostBinding('class') classes = '';
	elementName = 'lw-dashboard-overview-emphasis';
	constructor() {}

	ngOnInit() {
		this.classes = classWithModifiers(this.elementName, this.arrow);
	}
}
