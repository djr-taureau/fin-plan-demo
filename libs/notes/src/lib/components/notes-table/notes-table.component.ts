import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

import { NoteItem } from '../../models';

@Component({
	selector: 'lw-notes-table',
	templateUrl: './notes-table.component.html',
	styleUrls: ['./notes-table.component.scss']
})
export class NotesTableComponent implements OnInit, OnChanges {
	columns: string[] = ['select', 'name', 'owner', 'createdOn'];
	@Input() dataItems: NoteItem[];
	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<NoteItem>;
	selection = new SelectionModel<NoteItem>(true, []);

	displayData: NoteItem[];

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
