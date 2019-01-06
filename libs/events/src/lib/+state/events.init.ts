import { LoadDataStatus } from '@lifeworks/common';
import { EventsData } from './events.interfaces';

export const eventsInitialState: EventsData = {
	status: LoadDataStatus.initial,
	entities: {}
};
