import { ConfigService } from '../services';
import { AuthService } from '@lifeworks/authentication';

export const AuthServiceMock = jasmine.createSpyObj<AuthService>(
	'AuthService',
	['login', 'getToken', 'isAuthenticated', 'logout']
);

export const ConfigServiceMock = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['load', 'getLifeworksApiUri']
);
