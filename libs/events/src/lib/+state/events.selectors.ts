import { createFeatureSelector, createSelector } from '@ngrx/store';
import { prop, propOr, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus, isTrue, isFalse } from '@lifeworks/common';

import { EventsData } from './events.interfaces';
import { EventItem, EventItems } from '../models';

const EventsState = createFeatureSelector<EventsData>(
	'Events'
);

const ENTITIES_PROPERTY = prop('entities');
const STATUS_PROPERTY = propOr('status', '');
const IS_DISMISSED = propEq('dismissed', true);
const IS_NOT_DISMISSED = propEq('dismissed', false);
const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

const dataStatus = createSelector(EventsState, STATUS_PROPERTY);

export const isLoaded = createSelector(EventsState, IS_LOADED);
export const isLoading = createSelector(EventsState, IS_LOADING);

export const allEvents = createSelector(
	EventsState,
	pipe(ENTITIES_PROPERTY, values)
);

export const allEventsCount = createSelector(allEvents, length);

export const undismissedEvents = createSelector(allEvents, x =>
	x.filter(IS_NOT_DISMISSED)
);

export const undismissedCount = createSelector(
	undismissedEvents,
	length
);

export const dismissedEvents = createSelector(allEvents, x =>
	x.filter(IS_DISMISSED)
);

export const dismissedCount = createSelector(dismissedEvents, length);

export const filterEvents = filter =>
	createSelector(allEvents, x => x.filter(IS_DISMISSED));

export const filterCount = filter =>
	createSelector(filterEvents(filter), length);
