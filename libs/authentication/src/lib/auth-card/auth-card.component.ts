import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
	selector: 'lifeworks-auth-card',
	templateUrl: './auth-card.component.html',
	styleUrls: ['./auth-card.component.scss']
})
export class AuthCardComponent implements OnInit {
	constructor(private auth: AuthService) {}

	ngOnInit() {}

	login(): void {
		this.auth.login();
	}

	logout(): void {
		this.auth.logout();
		sessionStorage.clear();
	}

	isOnline(): boolean {
		return this.auth.isAuthenticated();
	}
}
