import { Notifications, NotificationsApi } from '../services';

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
