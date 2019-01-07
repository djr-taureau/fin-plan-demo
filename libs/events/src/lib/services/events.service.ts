import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { EventItem } from '../models';
import { EventsState } from '../+state/events.interfaces';
import {
	isLoaded,
	allEvents,
	allEventsCount,
	undismissedEvents,
	undismissedCount,
	dismissedEvents,
  dismissedCount,
  filterEventsByClient,
  sortEventsDueSoonest,
  sortEventsDueLatest
} from '../+state/events.selectors';
import { Load, Dismiss } from '../+state/events.actions';

@Injectable({
	providedIn: 'root'
})
export class Events {
	constructor(private store: Store<EventsState>) {}

	isDataLoaded() {
		return this.store.pipe(select(isLoaded));
	}

	load() {
		this.store.dispatch(new Load());
	}

	getAll() {
		return this.store.pipe(select(allEvents));
	}

	countOfAll() {
		return this.store.pipe(select(allEventsCount));
	}

	getUndismissed() {
		return this.store.pipe(select(undismissedEvents));
	}

	countOfUndismissed() {
		return this.store.pipe(select(undismissedCount));
	}

	getDismissed() {
		return this.store.pipe(select(dismissedEvents));
	}

	countOfDismissed() {
		return this.store.pipe(select(dismissedCount));
	}

	getFiltered() {
		return this.store.pipe(select(dismissedEvents));
  }

  getFilteredByClient(clientId: string) {
		return this.store.pipe(select(filterEventsByClient(clientId)));
  }

  getSortSoonest(){
    return this.store.pipe(select(sortEventsDueSoonest));
  }

  getSortLatest(){
    return this.store.pipe(select(sortEventsDueLatest));
  }

	countOfFiltered() {
		return this.store.pipe(select(dismissedCount));
	}

	dismiss(id: string) {
		this.store.dispatch(new Dismiss(id));
  }

  addEvent() {

  }
}
