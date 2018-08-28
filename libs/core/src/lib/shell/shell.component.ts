import { Component, OnInit } from '@angular/core';
import { AuthService } from '@lifeworks/authentication';
import { NavigationService, NavigationItems } from '../navigation';

@Component({
	selector: 'lw-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
	navigation: NavigationItems;

	constructor(
		private auth: AuthService,
		private navigationService: NavigationService
	) {}

	ngOnInit() {
		this.navigation = this.navigationService.getNavigation();
	}

	raiseEvent($event: MouseEvent, action: string) {
		console.log('raiseEvent', $event, action);
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
