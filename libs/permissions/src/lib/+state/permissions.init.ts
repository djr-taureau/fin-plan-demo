import { LoadDataStatus } from '@lifeworks/common';
import { PermissionsData } from './permissions.interfaces';

export const permissionsInitialState: PermissionsData = {
	status: LoadDataStatus.initial,
	entities: {}
};
