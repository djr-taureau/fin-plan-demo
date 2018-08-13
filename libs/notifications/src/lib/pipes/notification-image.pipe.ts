import { Pipe, PipeTransform } from '@angular/core';
import { NotificationItem } from '../models';
import { test, prop } from 'ramda';

@Pipe({
	name: 'notificationImage'
})
export class NotificationImagePipe implements PipeTransform {
	transform(value: NotificationItem, args?: any): any {
		switch (true) {
			// case test(/-completed/g, prop('notificationType', value)):
			//   return 'check';
			default:
				return prop('notificationType', value) || '';
		}
	}
}
