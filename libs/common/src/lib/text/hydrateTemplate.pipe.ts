import { Pipe, PipeTransform } from '@angular/core';
import { hydrateTemplate } from './templates';
import { Obj } from '../models';

export interface ITemplate {
	message: string;
}

const DOTS = /\./g;

const wrapTokenValue = (value: any, slug: string, source: Obj) =>
	`<span class="token token-${slug.replace(DOTS, '-')}">${value}</span>`;

@Pipe({ name: 'hydrateTemplate' })
export class HydrateTemplatePipe implements PipeTransform {
	transform<T extends ITemplate>(object: T): string {
		return hydrateTemplate(object.message, object, [wrapTokenValue]);
	}
}
