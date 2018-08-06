import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

import { NotificationsItem } from './models';

import {
	PaginationResult,
	getApiError,
	throwErrorAndLog
} from '@lifeworks/core';
import { catchError } from '../../../../node_modules/rxjs/operators';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: 'my-auth-token'
//   })
// };

@Injectable({
	providedIn: 'root'
})
export class NotificationAPIService {
	notificationsUrl = 'https://c1e420f9-05f0-4a54-9c29-1fc5937dd9e1.mock.pstmn.io/notifications';

	serviceErrorHandler = throwErrorAndLog('Notification API Service');

	constructor(private http: HttpClient) {}

	get(): Observable<PaginationResult<NotificationsItem>> {
		return this.http
			.get<PaginationResult<NotificationsItem>>(this.notificationsUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
		// return this.http.get<NotificationsItem[]>(this.notificationsUrl);
	}
}
