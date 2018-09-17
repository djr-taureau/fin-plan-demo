import { EntityState, InputOption } from '@lifeworks/common';
import { ClientItem } from '../models';

/**
 * Interface for the 'Clients' data used in
 *  - ClientsState, and
 *  - clientsReducer
 */
export interface ClientsData extends EntityState<ClientItem> {
}

/**
 * Interface to the part of the Store containing ClientsState
 * and other information related to ClientsData.
 */
export interface ClientsState {
	readonly clients: ClientsData;
}
