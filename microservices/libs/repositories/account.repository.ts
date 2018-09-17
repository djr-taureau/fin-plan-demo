import { EntityRepository, AbstractRepository } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { Account } from '../domain-entities';

@EntityRepository(Account)
export class AccountRepository extends AbstractRepository<Account> {
	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}
}
