import { UserService } from '@lifeworks/authentication';
import { ConfigService } from '@lifeworks/core';

export const m_UserService = jasmine.createSpyObj<UserService>('userService', [
	'getUser'
]);

export const m_User = {
	id: '0001',
	displayName: 'Frank Castle',
	roles: ['manager'],
	permissions: []
};

export const m_ConfigService = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['load', 'getLifeworksApiUri']
);
