import { Permissions, PermissionsApi } from '../services';
import { ConfigService } from '@lifeworks/core';

export const ConfigServiceMock = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['getLifeworksApiUri']
);

export const PermissionsMock = jasmine.createSpyObj<Permissions>(
	'Permissions',
	[
		'countOfAll',
		'getAll',
		'isDataLoaded',
		'load'
	]
);

export const PermissionsApiMock = jasmine.createSpyObj<PermissionsApi>(
	'PermissionsApi',
	['get']
);
