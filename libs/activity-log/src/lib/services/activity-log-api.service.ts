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
	activityLogUrl = 'https://c1e420f9-05f0-4a54-9c29-1fc5937dd9e1.mock.pstmn.io/activity_log';

	serviceErrorHandler = throwErrorAndLog('Activity Log API Service');

	constructor(private http: HttpClient) {}

	get() {
		return this.http
			.get<PaginationResult<ActivityLogItem>>(this.activityLogUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}
}
