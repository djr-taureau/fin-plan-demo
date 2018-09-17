import {
	setLoadingState,
	setDataState,
	setEntity
} from '@lifeworks/common';
import {
	PermissionsActions,
	PermissionsActionTypes
} from './permissions.actions';
import { permissionsInitialState } from './permissions.init';
import { PermissionsData } from './permissions.interfaces';


export function permissionsReducer(
	state = permissionsInitialState,
	action: PermissionsActions
): PermissionsData {
	switch (action.type) {
		case PermissionsActionTypes.Load:
			return setLoadingState(state);

		case PermissionsActionTypes.LoadSuccess:
			return setDataState(action.payload, state);

		case PermissionsActionTypes.CreatePermissionSuccess:
			return setEntity(action.payload.guid, action.payload, state);
			
		default:
			return state;
	}
}
