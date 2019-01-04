import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@lifeworks/core';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';
import { EventItem } from '../models';
import { getApiError } from '../events-errors';

const DIMISS = { dismiss: true };

@Injectable({
	providedIn: 'root'
})
export class EventsApi {
	EventsUrl: string;

	serviceErrorHandler = throwErrorAndLog('Events API Service');

	constructor(
		private http: HttpClient,
		private configuration: ConfigService
	) {
		const baseUrl = configuration.getLifeworksApiUri();
		this.EventsUrl = `${baseUrl}/events`;
	}

	get() {
		return this.http
			.get<PaginationResult<EventItem>>(this.EventsUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}

	dismiss(id: string) {
		return this.http
			.patch([this.EventsUrl, id].join('/'), DIMISS)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}
}
