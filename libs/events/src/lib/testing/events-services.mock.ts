import { Events, EventsApi } from '../services';
import { ConfigService } from '@lifeworks/core';

export const ConfigServiceMock = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['getLifeworksApiUri']
);

export const EventsMock = jasmine.createSpyObj<Events>(
	'Events',
	[
		'countOfAll',
		'countOfDismissed',
		'countOfUndismissed',
		'dismiss',
		'getAll',
		'getDismissed',
		'getUndismissed',
		'isDataLoaded',
		'load'
	]
);

export const EventsApiMock = jasmine.createSpyObj<EventsApi>(
	'EventsApi',
	['get', 'dismiss']
);
