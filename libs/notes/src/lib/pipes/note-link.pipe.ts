import { Pipe, PipeTransform } from '@angular/core';
import { path, join, when, equals } from 'ramda';

import { NoteItem } from '../models';

@Pipe({
	name: 'noteLink'
})
export class NoteLinkPipe implements PipeTransform {
	transform(value: NoteItem, args?: any): any {
		const link = join('/', [
			'',
			path(['subject', 'entityType'], value),
			path(['subject', 'guid'], value)
		]);

		return when(equals('//'), () => '/', link);
	}
}
