import { Notifications } from '../services/notifications.service';

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
