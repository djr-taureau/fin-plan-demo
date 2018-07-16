import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ActivityLogItem } from './models';

import { getApiError, throwErrorAndLog } from '@lifeworks/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogAPIService {
  activityLogUrl = 'https://0a712aa5-cdc0-4b03-8704-7b84574ba25c.mock.pstmn.io/activity_log';

  serviceErrorHandler = throwErrorAndLog('Activity Log API Service');

  constructor(private http: HttpClient) {}

  get(): Observable<ActivityLogItem[]> {
    return this.http
      .get<ActivityLogItem[]>(this.activityLogUrl)
      .pipe(catchError(this.serviceErrorHandler(getApiError)));
  }
}
