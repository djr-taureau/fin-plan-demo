export interface AzureADAuthProviderConfig {
	tenant: string;
	clientID: string;
	signUpSignInPolicy: string;
	b2cScopes: Array<string>;
	graphScopes: Array<string>;
}

export const getAuthorityUri = (tenant: string, authPolicy: string) =>
	`https://login.microsoftonline.com/tfp/${tenant}/${authPolicy}`;
