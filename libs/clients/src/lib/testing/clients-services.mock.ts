import { Clients, ClientsApi } from '../services';
import { ConfigService } from '@lifeworks/core';

export const ConfigServiceMock = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['getLifeworksApiUri']
);

export const ClientsMock = jasmine.createSpyObj<Clients>(
	'Clients',
	[
		'countOfAll',
		'getAll',
		'isDataLoaded',
		'load'
	]
);

export const ClientsApiMock = jasmine.createSpyObj<ClientsApi>(
	'ClientsApi',
	['get']
);
