import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@lifeworks/core';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';
import { ClientItem } from '../models';
import { getApiError, getApiItemCreationError } from '../clients-errors';

const DIMISS = { dismiss: true };

@Injectable({
	providedIn: 'root'
})
export class ClientsApi {
	clientsUrl: string;

	serviceErrorHandler = throwErrorAndLog('Client API Service');

	constructor(
		private http: HttpClient,
		private configuration: ConfigService
	) {
		const baseUrl = configuration.getLifeworksApiUri();
		this.clientsUrl = `${baseUrl}/clients`;
	}

	get() {
		return this.http
			.get<PaginationResult<ClientItem>>(this.clientsUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}

	createClient(item: ClientItem) {
		return this.http
			.post<ClientItem>(this.clientsUrl, item)
			.pipe(
				catchError(this.serviceErrorHandler(getApiItemCreationError))
			);
	}
}
