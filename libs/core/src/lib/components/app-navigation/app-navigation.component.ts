import { Component, OnInit } from '@angular/core';
import { NavigationItems } from '@lifeworks/common';
import { AuthService } from '@lifeworks/authentication';

import { NavigationService } from '../../services';

@Component({
	selector: 'lw-app-navigation',
	templateUrl: './app-navigation.component.html',
	styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
	navigation: NavigationItems;

	constructor(
		private auth: AuthService,
		private navigationService: NavigationService
	) {}

	ngOnInit() {
		this.navigation = this.navigationService.getNavigation();
	}

	raiseEvent($event: MouseEvent, action: string) {
		switch (action) {
			case 'logout':
				this.logout();
				break;
		}
	}

	logout() {
		this.auth.logout();
	}
}
