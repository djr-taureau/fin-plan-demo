import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivityLogItem } from './models';
import { ActivityLogAPIService } from './activity-log-api.service';
import { PaginationResult } from '@lifeworks/core';

export type ActivityLogItems = Array<ActivityLogItem>;

@Injectable({
	providedIn: 'root'
})
export class ActivityLogService {
	constructor(private ActivityLogAPI: ActivityLogAPIService) {}

	get(): Observable<PaginationResult<ActivityLogItem>> {
		return this.ActivityLogAPI.get();
	}
}
