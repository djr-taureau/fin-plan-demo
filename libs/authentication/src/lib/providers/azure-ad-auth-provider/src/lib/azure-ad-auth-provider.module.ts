import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_PROVIDER } from '@lifeworks/authentication';
import { AzureAdAuthProvider } from './azure-ad-auth.provider';

@NgModule({
	imports: [CommonModule],
	providers: [{ provide: AUTH_PROVIDER, useClass: AzureAdAuthProvider }]
})
export class AzureAdAuthProviderModule {}
