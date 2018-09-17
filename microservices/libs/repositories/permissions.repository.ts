import { EntityRepository, AbstractRepository, DeepPartial } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { SystemPermission } from '../domain-entities';

@EntityRepository(SystemPermission)
export class PermissionsRepository extends AbstractRepository<SystemPermission> {

  async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
  }
  
  async insert(permission?: DeepPartial<SystemPermission>) {
		return await this.repository.save(permission);
  }

}