import { InjectionToken } from "@angular/core";

export const AUTH_PROVIDER = new InjectionToken('AUTH_PROVIDER');
export const AUTH_CONFIG = new InjectionToken('AUTH_CONFIG');

export abstract class AuthProvider {
  abstract login(): void;
  abstract logout(): void;
  isAuthenticated() { return false }
  abstract getToken(): any;
}

