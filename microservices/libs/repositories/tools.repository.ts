import { EntityRepository, AbstractRepository } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { SystemTool } from '../domain-entities';
import { map, assocPath, pick } from 'ramda';

@EntityRepository(SystemTool)
export class ToolsRepository extends AbstractRepository<SystemTool> {
	async getAllPaged(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		const results = await this.repository.findAndCount({
			select: ['guid', 'displayName', 'internalName', 'description'],
			...pagingOptions
		});

		return results;
	}
}
