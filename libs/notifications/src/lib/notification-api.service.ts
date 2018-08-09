import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NotificationsItem } from './models';

import { getApiError } from '@lifeworks/core';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const DIMISS = { dismiss: true };

@Injectable({
	providedIn: 'root'
})
export class NotificationAPIService {
	notificationsUrl = 'https://c1e420f9-05f0-4a54-9c29-1fc5937dd9e1.mock.pstmn.io/notifications';

	serviceErrorHandler = throwErrorAndLog('Notification API Service');

	constructor(private http: HttpClient) {}

	get() {
		return this.http
			.get<PaginationResult<NotificationsItem>>(this.notificationsUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}

	dismiss(id: string) {
		return this.http
			.patch([this.notificationsUrl, id].join('/'), DIMISS)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}
}
