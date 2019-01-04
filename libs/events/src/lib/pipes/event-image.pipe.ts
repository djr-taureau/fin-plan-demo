import { Pipe, PipeTransform } from '@angular/core';
import { EventItem } from '../models';
import { test, prop } from 'ramda';

@Pipe({
	name: 'eventImage'
})
export class EventImagePipe implements PipeTransform {
	transform(value: EventItem, args?: any): any {
		switch (true) {
			case test(/-completed/g, prop('eventType', value)):
			  return 'check';
			default:
				return prop('title', value) || '';
		}
	}
}
