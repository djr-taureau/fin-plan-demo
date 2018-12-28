import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@lifeworks/core';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';
import { TaskItem } from '../models';
import { getApiError } from '../tasks-errors';

const DIMISS = { dismiss: true };

@Injectable({
	providedIn: 'root'
})
export class TasksApi {
	TasksUrl: string;

	serviceErrorHandler = throwErrorAndLog('Task API Service');

	constructor(
		private http: HttpClient,
		private configuration: ConfigService
	) {
		const baseUrl = configuration.getLifeworksApiUri();
		this.TasksUrl = `${baseUrl}/Tasks`;
	}

	get() {
		return this.http
			.get<PaginationResult<TaskItem>>(this.TasksUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}

	dismiss(id: string) {
		return this.http
			.patch([this.TasksUrl, id].join('/'), DIMISS)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}
}
