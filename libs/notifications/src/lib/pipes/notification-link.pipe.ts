import { Pipe, PipeTransform } from '@angular/core';
import { path, join, when, equals } from 'ramda';

import { NotificationItem } from '../models';

@Pipe({
	name: 'notificationLink'
})
export class NotificationLinkPipe implements PipeTransform {
	transform(value: NotificationItem, args?: any): any {
		const link = join('/', [
			'',
			path(['subject', 'entityType'], value),
			path(['subject', 'guid'], value)
		]);

		return when(equals('//'), () => '/', link);
	}
}
