import { EntityRepository, AbstractRepository, FindManyOptions} from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { ClientAccount } from '../domain-entities';

@EntityRepository(ClientAccount)
export class ClientRepository extends AbstractRepository<ClientAccount> {


	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}

	async expandedQuery(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		const query: FindManyOptions = {
			...pagingOptions,
			relations: ['owner', 'owner.profile']
		}

		return await this.repository.findAndCount(query);
	}
}
