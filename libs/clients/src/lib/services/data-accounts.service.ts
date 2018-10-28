import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { reduce, values } from 'ramda';
import { DataModuleStatus, ModuleStatus } from '../models';
import { DataNode, FlatDataNode, buildDataNodeTree } from '@lifeworks/common';

export enum AccountLinkStatus {
	Ok = 1, //Manual or Linked Account with active Status
	Error = 2 // Used to indicate an error
}
export interface Organization {
	name: string;
	description: string;
}
export class AccountStatus {
	status: AccountLinkStatus;
	organization: Organization;
	account: string;
	balance: number;
}
export class AccountTypeSummary {
	linkStatus: AccountLinkStatus;
	SumOfBalances: number;
}

const DATA_ACCOUNTS = {
	'Cash & Savings': {
		'PNC Savings Account': {
			'status': AccountLinkStatus.Ok,
			'organization': {
				'name': 'pnc',
				'description': 'Voya (Formerly ING) - Your Retirement Plan requires and additional response in order to complete linking your account'
			},
			'account': '************** 1234',
			'balance': 2123456789.42
		}
	},
	'Non-Retirement Assets': {
		'empty': true
	},
	'Assets': {
		'PNC Checking Account 1': {
			'status': AccountLinkStatus.Ok,
			'organization': {
				'name': 'chase'
			},
			'account': '************ 1234',
			'balance': 2123456789.42
		},
		'PNC Checking Account 2': {
			'status': AccountLinkStatus.Error,
			'organization': {
				'name': 'pnc',
				'description': 'Voya (Formerly ING) - Your Retirement Plan requires and additional response in order to complete linking your account'
			},
			'balance': 2123456789.42
		}
	}
};

export type AccountStatusSummary = AccountStatus | AccountTypeSummary;

export class AccountTreeNode extends FlatDataNode<AccountStatusSummary> {
	constructor() {
		super('', null, false, 0);
	}
}

@Injectable({
	providedIn: 'root'
})
export class AccountsService {
	dataChange = new BehaviorSubject<AccountTreeNode[]>([]);

	constructor() {
		this.initialize();
	}

	initialize() {
		// todo: Remove hard coded Values
		const dataObject = DATA_ACCOUNTS;
		const mapFn = buildDataNodeTree(
			AccountTreeNode,
			this.mapData.bind(this),
			1
		);
		const data = mapFn(dataObject, 0);
		this.dataChange.next(data);
	}

	getAccountTypeTotal(accounts: AccountStatus[]) {
		return reduce((a, c) => a + (c.balance || 0), 0, accounts);
	}

	getAccountTypeLinkStatus(accounts: AccountStatus[]) {
		return reduce(
			(a, c) => (a < c.status ? c.status : a),
			AccountLinkStatus.Ok,
			accounts
		);
	}

	mapData(
		key: string,
		level: number,
		source: AccountStatusSummary
	): AccountStatusSummary {
		const sourceValues = values(source) || [];

		if (level === 0) {
			const mappedSummary = {
				linkStatus: this.getAccountTypeLinkStatus(sourceValues),
				SumOfBalances: this.getAccountTypeTotal(sourceValues)
			}
			return mappedSummary;
		}

		return source;
	}
}
