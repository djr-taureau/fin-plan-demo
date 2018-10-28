//tslint:disable:use-host-property-decorator
import { Component } from '@angular/core';
import { UITreeControl, UITreeDataSource } from '@lifeworks/common';
import { AccountsService, AccountStatusSummary } from '../../services';

@Component({
	selector: 'lw-clients-balance-sheet',
	templateUrl: './clients-balance-sheet.component.html',
	styleUrls: ['./clients-balance-sheet.component.scss'],
	host: { class: 'lw-balance-sheet' }
})
export class ClientsBalanceSheetComponent{
	treeControl: UITreeControl<AccountStatusSummary>;
	dataSource: UITreeDataSource<AccountStatusSummary>;

	constructor(dataModules: AccountsService) {
		this.treeControl = new UITreeControl();
		this.dataSource = new UITreeDataSource(this.treeControl);

		dataModules.dataChange.subscribe(data => (this.dataSource.data = data));
	}
}
