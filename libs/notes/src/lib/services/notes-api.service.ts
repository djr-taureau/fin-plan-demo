import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@lifeworks/core';
import { PaginationResult, throwErrorAndLog } from '@lifeworks/common';
import { NoteItem } from '../models';
import { getApiError } from '../notes-errors';

const DIMISS = { dismiss: true };

@Injectable({
	providedIn: 'root'
})
export class NotesApi {
	NotesUrl: string;

	serviceErrorHandler = throwErrorAndLog('Note API Service');

	constructor(
		private http: HttpClient,
		private configuration: ConfigService
	) {
		const baseUrl = configuration.getLifeworksApiUri();
		this.NotesUrl = `${baseUrl}/Notes`;
	}

	get() {
		return this.http
			.get<PaginationResult<NoteItem>>(this.NotesUrl)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}

	dismiss(id: string) {
		return this.http
			.patch([this.NotesUrl, id].join('/'), DIMISS)
			.pipe(catchError(this.serviceErrorHandler(getApiError)));
	}
}
