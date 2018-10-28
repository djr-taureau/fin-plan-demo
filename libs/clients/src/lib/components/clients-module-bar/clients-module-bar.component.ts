import { Component } from '@angular/core';
import { DataModuleService } from '../../services';
import { UITreeControl, UITreeDataSource } from '@lifeworks/common';
import { DataModuleStatus } from '../../models';

@Component({
	selector: 'lw-clients-module-bar',
	templateUrl: './clients-module-bar.component.html',
	styleUrls: ['./clients-module-bar.component.scss']
})
export class ClientsModuleBarComponent {
	treeControl: UITreeControl<DataModuleStatus>;
	dataSource: UITreeDataSource<DataModuleStatus>;

	constructor(dataModules: DataModuleService) {
		this.treeControl = new UITreeControl();
		this.dataSource = new UITreeDataSource(this.treeControl);

		dataModules.dataChange.subscribe(data => (this.dataSource.data = data));
	}
}