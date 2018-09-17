import {
	setLoadingState,
	setDataState,
	setEntity
} from '@lifeworks/common';
import {
	ClientsActions,
	ClientsActionTypes
} from './clients.actions';
import { clientsInitialState } from './clients.init';
import { ClientsData } from './clients.interfaces';


export function clientsReducer(
	state = clientsInitialState,
	action: ClientsActions
): ClientsData {
	switch (action.type) {
		case ClientsActionTypes.Load:
			return setLoadingState(state);

		case ClientsActionTypes.LoadSuccess:
			return setDataState(action.payload, state);
			
		default:
			return state;
	}
}
