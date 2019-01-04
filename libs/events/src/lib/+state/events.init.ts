import { LoadDataStatus } from '@lifeworks/common';
import { EventsData } from './Events.interfaces';

export const eventsInitialState: EventsData = {
	status: LoadDataStatus.initial,
	entities: {}
};
