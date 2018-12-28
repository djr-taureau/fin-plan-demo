import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ActivityLogItem } from '../models';

import { getApiError } from '../activity-log-errors';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';

@Injectable({
	providedIn: 'root'
})
export class ActivityLogAPIService {
	activityLogUrl = '3ee63553-cc38-4cf2-add2-4356fbbd6298.mock.pstmn.io/activity_log';

	serviceErrorHandler = throwErrorAndLog('Activity Log API Service');

	constructor(private http: HttpClient) {}

	get() {
		return this.http
			.get<PaginationResult<ActivityLogItem>>(this.activityLogUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}
}
