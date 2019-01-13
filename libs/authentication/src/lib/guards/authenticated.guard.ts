import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { match, test, complement, split, head, pipe } from 'ramda';
import { Constants } from 'msal';
import { saveToStorage, doesNotMatch, stripeHash } from '@lifeworks/common';

import { REDIRECT_TOKEN, PROCESSING_LOGIN_PAGE } from '../constants';
import { AuthService } from '../services';

const isNotProcessingLogin = doesNotMatch(PROCESSING_LOGIN_PAGE);
const storeToken = pipe(stripeHash, saveToStorage(REDIRECT_TOKEN));

@Injectable({
	providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		if (state.url) {
			if (this.auth.isAuthenticated()) return true;
			else {
			  return true;	//  this.auth.login(state.url);
			}
		}
	}

	constructor(private auth: AuthService) {}
}
