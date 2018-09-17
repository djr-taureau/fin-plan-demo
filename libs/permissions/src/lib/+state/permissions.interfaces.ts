import { EntityState, InputOption } from '@lifeworks/common';
import { PermissionItem } from '../models';

/**
 * Interface for the 'Permissions' data used in
 *  - PermissionsState, and
 *  - permissionsReducer
 */
export interface PermissionsData extends EntityState<PermissionItem> {
}

/**
 * Interface to the part of the Store containing PermissionsState
 * and other information related to PermissionsData.
 */
export interface PermissionsState {
	readonly permissions: PermissionsData;
}
