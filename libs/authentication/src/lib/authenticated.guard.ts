import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { saveToStorage } from '@lifeworks/core';
import { match } from 'ramda';
import { REDIRECT_TOKEN } from './authentication.routes';
import { Constants } from 'msal'
import { Location } from '@angular/common';
import { test, complement, split, head, pipe } from 'ramda';
import { AuthService } from './auth.service';

const PROCESSING_LOGIN_PAGE = /processing-login/;
const isNotProcessingLogin = complement(test(PROCESSING_LOGIN_PAGE));
const removeUrlhash = pipe(split('#'), head);
const storeToken = pipe(removeUrlhash, saveToStorage(REDIRECT_TOKEN));

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.auth.isAuthenticated())
      return true;
    else {
      if (isNotProcessingLogin(state.url)) {
        storeToken(state.url);
        this.auth.login();
      }
    }

  }

  constructor(private auth: AuthService) { }
}
