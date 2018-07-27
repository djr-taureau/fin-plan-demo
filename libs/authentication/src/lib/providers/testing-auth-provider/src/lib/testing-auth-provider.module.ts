import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_PROVIDER } from '@lifeworks/authentication';
import { TestingAuthProvider } from './testing-auth.provider';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: AUTH_PROVIDER, useClass: TestingAuthProvider }
  ]
})
export class TestingAuthProviderModule { }
