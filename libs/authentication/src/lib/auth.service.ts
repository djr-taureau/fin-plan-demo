import { Injectable, InjectionToken, Inject } from '@angular/core';
import { AuthProvider, AUTH_PROVIDER } from './auth-provider';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthProvider {

  constructor(@Inject(AUTH_PROVIDER) private provider: AuthProvider) {
    super();
  }

  public login(): void {
    this.provider.login()
  }

  logout(): void {
    this.provider.logout();
  };

  isAuthenticated() {
    return this.provider.isAuthenticated()
  };

  async getToken(): Promise<string> {
    return await this.provider.getToken()
  }

}
