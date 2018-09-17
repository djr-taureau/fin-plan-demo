import { EntityRepository, AbstractRepository } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { SystemUser } from '../domain-entities';

@EntityRepository(SystemUser)
export class UsersRepository extends AbstractRepository<SystemUser> {

  async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
  }
  
}