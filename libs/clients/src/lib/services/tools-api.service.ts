import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@lifeworks/core';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';
import { getApiError, getApiItemCreationError } from '../clients-errors';
import { Tool } from '../models';

@Injectable({
	providedIn: 'root'
})
export class ToolsApi {
	clientsUrl: string;

	serviceErrorHandler = throwErrorAndLog('Tools API Service');

	constructor(
		private http: HttpClient,
		private configuration: ConfigService
	) {
		const baseUrl =  'http://localhost:7071/api'; //configuration.getLifeworksApiUri();
		this.clientsUrl = `${baseUrl}/tools`;
	}

	get() {
		return this.http
			.get<PaginationResult<Tool>>(this.clientsUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}

	createClient(item: Tool) {
		return this.http
			.post<Tool>(this.clientsUrl, item)
			.pipe(
				catchError(this.serviceErrorHandler(getApiItemCreationError))
			);
	}
}
