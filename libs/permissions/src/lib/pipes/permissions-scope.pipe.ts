import { Pipe, PipeTransform } from '@angular/core';
import { PermissionsScope } from '../models';

@Pipe({
	name: 'permissionsScope'
})
export class PermissionsScopePipe implements PipeTransform {
	transform(value: PermissionsScope): any {
        return PermissionsScope[value];
	}
}
