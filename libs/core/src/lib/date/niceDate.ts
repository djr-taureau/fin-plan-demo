import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({ name: 'niceDate' })
export class NiceDatePipe implements PipeTransform {
	transform(date: Date): string {
		const formattedDated: string = format(date, 'MM-DD-YY @ h:sA');
		return formattedDated.substring(0, formattedDated.length - 1);
	}
}
