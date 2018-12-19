import { EntityRepository, AbstractRepository, FindManyOptions } from 'typeorm';
import { getPagingOptions, QueryOptions, GetQueryOptions } from './common';
import { BillingAccount } from '../domain-entities';

@EntityRepository(BillingAccount)
export class BillingAccountsRepository extends AbstractRepository<BillingAccount> {
	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}

	async getBillingAccount(options?:GetQueryOptions) {
		const query: FindManyOptions = {
			where: {
				guid: options.guid
			},
			relations: ['owner']
		}

		return await this.repository.find(query);
	}
}
