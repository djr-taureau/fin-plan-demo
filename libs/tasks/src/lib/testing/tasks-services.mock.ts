import { Tasks, TasksApi } from '../services';
import { ConfigService } from '@lifeworks/core';

export const ConfigServiceMock = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['getLifeworksApiUri']
);

export const TasksMock = jasmine.createSpyObj<Tasks>(
	'Tasks',
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

export const TasksApiMock = jasmine.createSpyObj<TasksApi>(
	'TasksApi',
	['get', 'dismiss']
);
