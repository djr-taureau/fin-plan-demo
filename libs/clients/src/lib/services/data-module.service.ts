import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { reduce, values } from 'ramda';
import { DataModuleStatus, ModuleStatus } from '../models';
import { DataNode, FlatDataNode, buildDataNodeTree } from '@lifeworks/common';

const DATA_MODULES = {
	'Get Started': {
		'Objectives & Priorities': {'status': ModuleStatus.Completed},
		'Family': {'status': ModuleStatus.NotStarted}
	},
	'Estate Planning': {
		'Estate Planning': {'status': ModuleStatus.Completed}
	},
	'Assets': {
		'Business': {'status': ModuleStatus.NotStarted},
		'Cash & Savings': {'status': ModuleStatus.Completed},
		'Retirement Accounts': {'status': ModuleStatus.NotStarted},
		'Non-Retirement Accounts': {'status': ModuleStatus.Started},
		'College Funding': {'status': ModuleStatus.NotStarted}
	},
	'Liabilities': {
		'Debt': {'status': ModuleStatus.Started}
	},
	'Risk Management': {
		'Debt': {'status': ModuleStatus.Completed},
		'Property & Casualty Insurance': {'status': ModuleStatus.Completed},
		'Life Insurance': {'status': ModuleStatus.Completed},
		'Disability Insurance': {'status': ModuleStatus.Completed},
		'Long Term Care Insurance': {'status': ModuleStatus.Completed},
		'Health Insurance': {'status': ModuleStatus.Completed}
	},
	'Lifestyle': {
		'Budget': {'status': ModuleStatus.Started},
		'Budget2':{'status':  ModuleStatus.NotStarted}
	},
	'Additional Information': {
		'Vision': {'status': ModuleStatus.Started},
		'Values': {'status': ModuleStatus.Started}
	}
};

export class ModuleTreeNode extends FlatDataNode<DataModuleStatus> {
	constructor() {
		super('', null, false, 0);
	}
}


@Injectable({
	providedIn: 'root'
})
export class DataModuleService {
	dataChange = new BehaviorSubject<ModuleTreeNode[]>([]);

	constructor() {
		this.initialize();
	}

	initialize() {
		// todo: Remove hard coded Values
		const dataObject = DATA_MODULES;
		const mapFn = buildDataNodeTree(ModuleTreeNode, this.mapDataToStatus.bind(this), 1); 
		const data = mapFn(dataObject, 0)
		this.dataChange.next(data);
	}

	calculateStatus(oldValue: ModuleStatus | 0, newValue: ModuleStatus | 0): ModuleStatus {
		if (
			(oldValue !== newValue )
		) {
			return ModuleStatus.Started;
		}

		return newValue;
	}

	mapDataToStatus(key: string, level: number, source: DataModuleStatus): ModuleStatus {
		const mappedValue = reduce<DataModuleStatus | 0, ModuleStatus>(
			(acc, val: any) => {
				const _val = typeof val === 'object' ? val.status : val;

				if (acc === 0) {
					return _val;
				}

				return this.calculateStatus(acc, _val);
			},
			0, values(source || []));

		return mappedValue as ModuleStatus;
	}
}
