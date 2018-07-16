import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivityLogItem } from './models';
import { ActivityLogAPIService } from './activity-log-api.service';

export type ActivityLogItems = Array<ActivityLogItem>;

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  constructor(private ActivityLogAPI: ActivityLogAPIService) {}

  get(): Observable<Array<ActivityLogItem>> {
    return this.ActivityLogAPI.get();
  }
}
