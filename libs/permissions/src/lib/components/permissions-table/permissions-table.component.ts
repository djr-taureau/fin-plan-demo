import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

import { PermissionItem, PermissionItems } from '../../models';

@Component({
	selector: 'lw-permissions-table',
	templateUrl: './permissions-table.component.html',
	styleUrls: ['./permissions-table.component.scss']
})
export class PermissionsTableComponent implements OnInit, OnChanges {
	columns: string[] = ['name', 'description', 'scope'];
	@Input() dataItems: PermissionItems;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	dataSource: MatTableDataSource<PermissionItem>;
	displayData: PermissionItems;

	constructor() {
	}
	
	ngOnInit() {}
	
	ngOnChanges(changes: SimpleChanges) {
		if(changes.dataItems) {
			this.dataSource = new MatTableDataSource(this.dataItems);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		}
	}
}
