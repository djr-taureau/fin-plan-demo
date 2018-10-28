import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

import { ClientItem, ClientItems } from '../../models';

@Component({
	selector: 'lw-clients-table',
	templateUrl: './clients-table.component.html',
	styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit, OnChanges {
	columns: string[] = ['select', 'name', 'preferredPhone', 'preferredEmail', 'preferredAddress'];
	@Input() dataItems: ClientItems;
	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<ClientItem>;
	selection = new SelectionModel<ClientItem>(true, []);

	displayData: ClientItems;

	constructor() {
	}
	
	ngOnInit() {}
	
	ngOnChanges(changes: SimpleChanges) {
		if(changes.dataItems) {
			this.dataSource = new MatTableDataSource(this.dataItems);
			this.dataSource.sort = this.sort;
		}
	}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
