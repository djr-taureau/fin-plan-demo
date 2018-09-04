export interface AzureADAuthProviderConfig {
	tenant: string;
	clientID: string;
	authority: string;
	scopes: Array<string>;
}
