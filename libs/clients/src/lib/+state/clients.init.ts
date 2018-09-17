import { LoadDataStatus } from '@lifeworks/common';
import { ClientsData } from './clients.interfaces';

export const clientsInitialState: ClientsData = {
	status: LoadDataStatus.initial,
	entities: {}
};
