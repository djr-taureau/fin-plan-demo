import { Injectable, Inject, InjectionToken } from '@angular/core';
import { map, comparator, sort, pipe, propOr, assoc } from 'ramda';

import { sortNestedByOrder } from '@lifeworks/common';
import { NavigationItems } from './navigation.provider';

export const APP_NAVIGATION = new InjectionToken<NavigationItems>(
	'AppNavigation'
);

@Injectable({
	providedIn: 'root'
})
export class NavigationService {
	private navigationItems: NavigationItems;

	constructor(@Inject(APP_NAVIGATION) navigation: NavigationItems) {
		this.setNavigation(navigation);
	}

	private setNavigation(definition: NavigationItems) {
		this.navigationItems = sortNestedByOrder(definition);
	}

	getNavigation() {
		return this.navigationItems;
	}
}
