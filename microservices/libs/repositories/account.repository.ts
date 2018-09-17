import { EntityRepository, AbstractRepository } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { FirmAccount } from '../domain-entities';

@EntityRepository(FirmAccount)
export class AccountRepository extends AbstractRepository<FirmAccount> {
	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}
}
