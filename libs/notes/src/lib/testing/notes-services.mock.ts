import { Notes, NotesApi } from '../services';
import { ConfigService } from '@lifeworks/core';

export const ConfigServiceMock = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['getLifeworksApiUri']
);

export const NotesMock = jasmine.createSpyObj<Notes>(
	'Notes',
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

export const NotesApiMock = jasmine.createSpyObj<NotesApi>(
	'NotesApi',
	['get', 'dismiss']
);
