import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityLogItemCollection } from '../models';
import * as ActivityLogActions from '../+state/activity-log.actions';
import { Store, select } from '@ngrx/store';
import { ActivityLogState } from '../+state/activity-log.reducer';
import { getActivityLogs, isLoaded } from '../+state/activity-log.selectors';

@Component({
	selector: 'lw-activity-page',
	templateUrl: './activity-page.component.html',
	styleUrls: ['./activity-page.component.scss']
})
export class ActivityPageComponent implements OnInit {
	logs$: Observable<ActivityLogItemCollection>;
	isLoaded$: Observable<boolean>;

	constructor(private store: Store<ActivityLogState>) {
		this.logs$ = store.pipe(select(getActivityLogs));
		this.isLoaded$ = store.pipe(select(isLoaded));
	}

	ngOnInit() {
		this.store.dispatch(new ActivityLogActions.Load());
	}
}
