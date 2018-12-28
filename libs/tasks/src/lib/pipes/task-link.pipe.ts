import { Pipe, PipeTransform } from '@angular/core';
import { path, join, when, equals } from 'ramda';

import { TaskItem } from '../models';

@Pipe({
	name: 'taskLink'
})
export class TaskLinkPipe implements PipeTransform {
	transform(value: TaskItem, args?: any): any {
		const link = join('/', [
			'',
			path(['subject', 'entityType'], value),
			path(['subject', 'guid'], value)
		]);

		return when(equals('//'), () => '/', link);
	}
}
