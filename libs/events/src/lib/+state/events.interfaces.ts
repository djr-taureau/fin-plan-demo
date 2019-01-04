import { LoadDataStatus, EntityState } from '@lifeworks/common';
import { EventItem, EventItems } from '../models';

/**
 * Interface for the 'Events' data used in
 *  - EventsState, and
 *  - eventsReducer
 */
export interface EventsData extends EntityState<EventItem> {}

/**
 * Interface to the part of the Store containing EventsState
 * and other information related to EventsData.
 */
export interface EventsState {
	readonly events: EventsData;
}
