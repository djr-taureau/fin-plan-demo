import { Component } from '@angular/core';
import { VALUE_LIST_DATA, BREADCRUMB_DATA, STATUS_LIST_DATA } from './data';

export const LIST_VALUE_DATA = VALUE_LIST_DATA;

@Component({
	selector: 'lw-sandbox-page',
	templateUrl: './sandbox-page.component.html',
	styleUrls: ['./sandbox-page.component.scss']
})
export class SandboxPageComponent {
	valueListData = LIST_VALUE_DATA;
	breadcrumbData = BREADCRUMB_DATA;
	statusListData = STATUS_LIST_DATA;
}
