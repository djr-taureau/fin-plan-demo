import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { timeout } from 'rxjs/operators';

import { retriveFromStorage, Timeout } from '@lifeworks/common';
import { REDIRECT_TOKEN } from '../../constants';
import { AuthService } from '../../services';

@Component({
	selector: 'lifeworks-login-callback',
	templateUrl: './login-callback.component.html',
	styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {
	get authState() {
		if (this.auth.isAuthenticated()) {
			return 'Authenticating';
		} else {
			return 'Unable to authenticate';
		}
	}

	constructor(private auth: AuthService, private router: Router) {}

	ngOnInit() {
		// this.processAuthState();
	}

	// @Timeout(500)
	// processAuthState() {
	// 	if (this.auth.isAuthenticated()) {
	// 		const redir = retriveFromStorage(REDIRECT_TOKEN);
	// 		this.router.navigate([redir]);
	// 	}
	// }
}
