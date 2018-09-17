import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@lifeworks/core';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';
import { PermissionItem } from '../models';
import { getApiError, getApiItemCreationError } from '../permissions-errors';

const DIMISS = { dismiss: true };

@Injectable({
	providedIn: 'root'
})
export class PermissionsApi {
	permissionsUrl: string;

	serviceErrorHandler = throwErrorAndLog('Permission API Service');

	constructor(
		private http: HttpClient,
		private configuration: ConfigService
	) {
		const baseUrl = configuration.getLifeworksApiUri();
		this.permissionsUrl = `${baseUrl}/permissions`;
	}

	get() {
		return this.http
			.get<PaginationResult<PermissionItem>>(this.permissionsUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}

	createPermission(item: PermissionItem) {
		return this.http
			.post<PermissionItem>(this.permissionsUrl, item)
			.pipe(
				catchError(this.serviceErrorHandler(getApiItemCreationError))
			);
	}
}
