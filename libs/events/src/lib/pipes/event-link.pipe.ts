import { Pipe, PipeTransform } from '@angular/core';
import { path, join, when, equals } from 'ramda';

import { EventItem } from '../models';

@Pipe({
	name: 'eventLink'
})
export class EventLinkPipe implements PipeTransform {
	transform(value: EventItem, args?: any): any {
		const link = join('/', [
			'',
			path(['title', 'entityType'], value),
			path(['title', 'guid'], value)
		]);

		return when(equals('//'), () => '/', link);
	}
}
