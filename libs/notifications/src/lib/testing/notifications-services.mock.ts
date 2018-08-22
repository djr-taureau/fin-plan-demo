import { Notifications, NotificationsApi } from '../services';
import { ConfigService } from '@lifeworks/core';

export const ConfigServiceMock = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['getLifeworksApiUri']
);

export const NotificationsMock = jasmine.createSpyObj<Notifications>(
	'Notifications',
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

export const NotificationsApiMock = jasmine.createSpyObj<NotificationsApi>(
	'NotificationsApi',
	['get', 'dismiss']
);
