import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'lw-dashboard-overview-item',
	templateUrl: './dashboard-overview-item.component.html',
	styleUrls: ['./dashboard-overview-item.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DashboardOverviewItemComponent implements OnInit {
	@Input() stacked = false;

	classes = '';

	constructor() {}

	ngOnInit() {
		if (this.stacked === true) {
			this.classes = 'lw-dashboard-overview-item-main-stacked';
		}
	}
}
