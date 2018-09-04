export const AuthConfig = {
	tenant: 'lifeworksDev.onmicrosoft.com',
	clientID: '75f60276-1018-4293-8ecf-fc996dfa304c',
	authority: `https://login.microsoftonline.com/tfp/lifeworksDev.onmicrosoft.com/B2C_1_SignIn`,
	scopes: [
		'openid',
		'profile',
		'https://lifeworksDev.onmicrosoft.com/client-portal/client-portal.read'
	]
};
