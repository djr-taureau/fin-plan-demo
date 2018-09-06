import { EntityRepository } from 'typeorm';
import { BaseRepository, QueryOptions, GetQueryOptions } from './common';
import { ActivityLog } from '../domain-entities';



@EntityRepository()
export class ActivityLogRepository extends BaseRepository<ActivityLog> {

  constructor() {
    super('ActivityLog');
  }

  async get(options: GetQueryOptions) {
    return await super.get(options);
  }
  
  async query(options?: QueryOptions) {
    return await super.query(options);
  }

  async insert(item: ActivityLog) {
    return await super.insert(item);
  }
}