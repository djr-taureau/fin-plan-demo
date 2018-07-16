import { Pipe, PipeTransform } from '@angular/core';
import { distanceInWordsToNow } from 'date-fns';

@Pipe({ name: 'niceDate' })
export class NiceDatePipe implements PipeTransform {
  transform(value: Date): string {
    return `${distanceInWordsToNow(value)} ago`;
  }
}
