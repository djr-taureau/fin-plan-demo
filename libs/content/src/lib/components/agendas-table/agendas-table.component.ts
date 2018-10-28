import {
	Component,
	Input,
	ViewChild,
	OnInit,
	OnChanges,
	SimpleChanges
} from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Agenda } from '../../models';


@Component({
	selector: 'lw-agendas-table',
	templateUrl: './agendas-table.component.html',
	styleUrls: ['./agendas-table.component.scss']
})
export class AgendasTableComponent implements OnInit, OnChanges {
	columns: string[] = ['name', 'createdOn'];
	@Input() dataItems: Agenda[];
	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<Agenda>;
	selection = new SelectionModel<Agenda>(true, []);

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.dataItems) {
			this.dataSource = new MatTableDataSource(this.dataItems);
			this.dataSource.sort = this.sort;
		}
	}
}
