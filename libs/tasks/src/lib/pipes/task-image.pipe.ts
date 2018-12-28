import { Pipe, PipeTransform } from '@angular/core';
import { TaskItem } from '../models';
import { test, prop } from 'ramda';

@Pipe({
	name: 'taskImage'
})
export class TaskImagePipe implements PipeTransform {
	transform(value: TaskItem, args?: any): any {
		switch (true) {
			// case test(/-completed/g, prop('notificationType', value)):
			//   return 'check';
			default:
				return prop('task', value) || '';
		}
	}
}
