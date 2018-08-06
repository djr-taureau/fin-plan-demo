import { Pipe, PipeTransform } from '@angular/core';
import { populateMessageTemplate } from '@lifeworks/utilities';

@Pipe({ name: 'populateMessageTemplate' })
export class PopulateMessageTemplatePipe implements PipeTransform {
	transform(object: object): string {
		return populateMessageTemplate(object);
	}
}
