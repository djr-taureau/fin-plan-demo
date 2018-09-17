import { PermissionItem, PermissionsScope } from '../models';

export const MOCK_PERMISSION_ITEM: PermissionItem = {
	guid: '1',
	name: 'firm/permission',
	description: 'Mock firm permission',
	scope: PermissionsScope.Account
};