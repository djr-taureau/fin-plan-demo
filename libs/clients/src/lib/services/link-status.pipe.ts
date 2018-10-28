import { Pipe, PipeTransform } from '@angular/core';
import { Address, isNotUseable, isUseable } from '@lifeworks/common';
import { props, filter } from 'ramda';
import { ModuleStatus } from '../models';
import { AccountLinkStatus } from './data-accounts.service';


@Pipe({
	name: 'linkStatus'
})
export class LinkStatusPipe implements PipeTransform {
	transform(linkStatus: AccountLinkStatus): string {
		if(isNotUseable(linkStatus)) {
			return AccountLinkStatus[AccountLinkStatus.Error];
		}
		return AccountLinkStatus[linkStatus];
	}
}
