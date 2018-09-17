import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { DataState, getDatasetState } from '@lifeworks/common';
import { ClientItems } from '../../models';
import { Clients } from '../../services';

@Component({
	selector: 'lw-clients-page',
	templateUrl: './clients-page.component.html',
	styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {
	columns: string[] = ['name', 'description', 'scope'];

	data$: Observable<ClientItems>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;

	constructor(private clients: Clients, public dialog: MatDialog) {}

	ngOnInit() {
		this.clients.load();
		this.initDataSet();
		this.isLoaded$ = this.clients.isDataLoaded();
		this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet() {
		this.data$ = this.clients.getAll();
		this.dataItemsCount$ = this.clients.countOfAll();
	}
}
