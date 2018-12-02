import { Pipe, PipeTransform } from '@angular/core';
import { NoteItem } from '../models';
import { test, prop } from 'ramda';

@Pipe({
	name: 'noteImage'
})
export class NoteImagePipe implements PipeTransform {
	transform(value: NoteItem, args?: any): any {
		switch (true) {
			// case test(/-completed/g, prop('notificationType', value)):
			//   return 'check';
			default:
				return prop('note', value) || '';
		}
	}
}
