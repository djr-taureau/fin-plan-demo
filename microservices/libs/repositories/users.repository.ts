import { EntityRepository, AbstractRepository } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { User } from '../domain-entities';

@EntityRepository(User)
export class UsersRepository extends AbstractRepository<User> {

  async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
  }
  
}