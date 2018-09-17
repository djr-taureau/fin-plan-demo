import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

import { ClientItem, ClientItems } from '../../models';

@Component({
	selector: 'lw-clients-table',
	templateUrl: './clients-table.component.html',
	styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit, OnChanges {
	columns: string[] = ['name', 'description', 'scope'];
	@Input() dataItems: ClientItems;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	dataSource: MatTableDataSource<ClientItem>;
	displayData: ClientItems;

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
