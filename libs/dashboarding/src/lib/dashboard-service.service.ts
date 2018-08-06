import { Injectable } from '@angular/core';
import { DASHBOARD_LIST } from './core';

@Injectable({
	providedIn: 'root'
})
export class DashboardServiceService {
	constructor() {}

	getDashboards() {
		return DASHBOARD_LIST;
	}
}
