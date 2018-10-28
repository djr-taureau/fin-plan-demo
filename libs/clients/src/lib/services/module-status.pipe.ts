import { Pipe, PipeTransform } from '@angular/core';
import { Address, isNotUseable, isUseable } from '@lifeworks/common';
import { props, filter } from 'ramda';
import { ModuleStatus } from '../models';


@Pipe({
	name: 'moduleStatus'
})
export class ModuleStatusPipe implements PipeTransform {
	transform(moduleStatus: ModuleStatus): string {
		if(isNotUseable(moduleStatus)) {
			return ModuleStatus[ModuleStatus.NotStarted];
		}
		return ModuleStatus[moduleStatus];
	}
}
