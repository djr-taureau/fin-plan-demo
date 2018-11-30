import { EntityRepository, AbstractRepository } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { BillingAccount } from '../domain-entities';

@EntityRepository(BillingAccount)
export class BillingAccountsRepository extends AbstractRepository<BillingAccount> {
	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}
}
