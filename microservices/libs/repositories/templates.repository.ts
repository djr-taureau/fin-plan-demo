import { Templates } from '../domain-entities';
import { EntityRepository, AbstractRepository } from 'typeorm';
import { TemplateQueryOptions } from './common';


@EntityRepository(Templates)
export class TemplatesRepository extends AbstractRepository<Templates> {

	async get(name: string) {
		return await this.repository.findOne({name: name});
	}

	async query(options?: TemplateQueryOptions) {
		return await this.repository.findAndCount(options);
	}
}
