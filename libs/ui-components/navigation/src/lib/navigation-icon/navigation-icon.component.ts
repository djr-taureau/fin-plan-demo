import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'lw-navigation-icon',
	templateUrl: './navigation-icon.component.html',
	styleUrls: ['./navigation-icon.component.scss'],
	// tslint:disable-next-line:use-host-property-decorator
	host: { class: 'lw-navigation-icon' },
	encapsulation: ViewEncapsulation.None
})
export class NavigationIconComponent implements OnInit {
	@Input() type: string;

	constructor() {}

	ngOnInit() {}
}
