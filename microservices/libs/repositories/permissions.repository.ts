import { EntityRepository, AbstractRepository, DeepPartial } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { Permission } from '../domain-entities';

@EntityRepository(Permission)
export class PermissionsRepository extends AbstractRepository<Permission> {

  async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
  }
  
  async insert(permission?: DeepPartial<Permission>) {
		return await this.repository.save(permission);
  }

}