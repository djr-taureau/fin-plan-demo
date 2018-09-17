import { EntityRepository, AbstractRepository, DeepPartial } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { ActivityLog } from '../domain-entities';


@EntityRepository(ActivityLog)
export class ActivityLogRepository extends AbstractRepository<ActivityLog> {

  async get(guid: string) {
    return await this.repository.findOne(guid);
  }
  
	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}

  async insert(item: DeepPartial<ActivityLog>) {
    return await this.repository.save(item);
  }
}