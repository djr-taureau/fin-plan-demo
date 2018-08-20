import { ConfigService } from '../config';

export const ConfigServiceMock = jasmine.createSpyObj<ConfigService>(
	'ConfigService',
	['load', 'getLifeworksApiUri']
);
