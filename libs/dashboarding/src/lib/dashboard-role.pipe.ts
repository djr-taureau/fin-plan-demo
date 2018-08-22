import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dashboardRole'
})
export class DashboardRolePipe implements PipeTransform {
	transform(value: string): any {
		switch (value) {
			case 'Advisor':
				return 'advisor';
			case 'Sales Manager':
				return 'manager';
			case 'Compliance Officer':
				return 'compliance';
			case 'Client':
				return 'client';
			default:
				return '';
		}
	}
}
