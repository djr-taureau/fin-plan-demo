import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { getApiError, ConfigService } from '@lifeworks/core';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';
import { NotificationItem } from '../models';

const DIMISS = { dismiss: true };

@Injectable({
	providedIn: 'root'
})
export class NotificationsApi {
	notificationsUrl: string;

	serviceErrorHandler = throwErrorAndLog('Notification API Service');

	constructor(
		private http: HttpClient,
		private configuration: ConfigService
	) {
		const baseUrl = configuration.getLifeworksApiUri();
		this.notificationsUrl = `${baseUrl}/notifications`;
	}

	get() {
		return this.http
			.get<PaginationResult<NotificationItem>>(this.notificationsUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}

	dismiss(id: string) {
		return this.http
			.patch([this.notificationsUrl, id].join('/'), DIMISS)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}
}
