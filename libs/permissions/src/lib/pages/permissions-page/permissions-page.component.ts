import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { DataState, getDatasetState } from '@lifeworks/common';
import { PermissionItems } from '../../models';
import { Permissions } from '../../services';
import { CreatePermissionPageComponent } from '../create-permission-page/create-permission-page.component';
import { tap } from '../../../../../../node_modules/rxjs/operators';

@Component({
	selector: 'lw-permissions-page',
	templateUrl: './permissions-page.component.html',
	styleUrls: ['./permissions-page.component.scss']
})
export class PermissionsPageComponent implements OnInit {
	columns: string[] = ['name', 'description', 'scope'];

	data$: Observable<PermissionItems>;
	isLoaded$: Observable<boolean>;
	dataState$: Observable<DataState>;
	dataItemsCount$: Observable<number>;

	constructor(private permissions: Permissions, public dialog: MatDialog) {}

	ngOnInit() {
		this.permissions.load();
		this.initDataSet();
		this.isLoaded$ = this.permissions.isDataLoaded();
		this.dataState$ = getDatasetState(this.isLoaded$, this.dataItemsCount$);
	}

	initDataSet() {
		this.data$ = this.permissions.getAll();
		this.dataItemsCount$ = this.permissions.countOfAll();
	}

	createPermission() {
		this.dialog.open(CreatePermissionPageComponent, {
			width: '45rem'
		});
	}
}
