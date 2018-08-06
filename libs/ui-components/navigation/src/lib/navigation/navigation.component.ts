//tslint:disable: use-host-property-decorator directive-selector
import { Component, OnInit, Directive, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'lw-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
	host: { class: 'lw-navigation' },
	encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

@Directive({
	selector: 'lw-navigation-group',
	host: { class: 'lw-navigation-group' }
})
export class NavigationGroupDirective {}

@Directive({
	selector: 'lw-navigation-title',
	host: { class: 'lw-navigation-title' }
})
export class NavigationTitleDirective {}
