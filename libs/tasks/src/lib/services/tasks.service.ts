import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { TaskItem } from '../models';
import { TasksState } from '../+state/tasks.interfaces';
import {
	isLoaded,
	allTasks,
	allTasksCount,
	undismissedTasks,
	undismissedCount,
	dismissedTasks,
	dismissedCount
} from '../+state/tasks.selectors';
import { Load, Dismiss } from '../+state/tasks.actions';

@Injectable({
	providedIn: 'root'
})
export class Tasks {
	constructor(private store: Store<TasksState>) {}

	isDataLoaded() {
		return this.store.pipe(select(isLoaded));
	}

	load() {
		this.store.dispatch(new Load());
	}

	getAll() {
		return this.store.pipe(select(allTasks));
	}

	countOfAll() {
		return this.store.pipe(select(allTasksCount));
	}

	getUndismissed() {
		return this.store.pipe(select(undismissedTasks));
	}

	countOfUndismissed() {
		return this.store.pipe(select(undismissedCount));
	}

	getDismissed() {
		return this.store.pipe(select(dismissedTasks));
	}

	countOfDismissed() {
		return this.store.pipe(select(dismissedCount));
	}

	getFiltered() {
		return this.store.pipe(select(dismissedTasks));
	}

	countOfFiltered() {
		return this.store.pipe(select(dismissedCount));
	}

	dismiss(id: string) {
		this.store.dispatch(new Dismiss(id));
  }

  addNote() {

  }
}
