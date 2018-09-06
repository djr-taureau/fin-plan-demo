import { BaseRepository, QueryOptions, GetQueryOptions } from './common';
import { Notification } from '../domain-entities';
import { EntityRepository } from 'typeorm';

@EntityRepository()
export class NotificationsRepository extends BaseRepository<
	Notification
> {
	constructor() {
		super('Notifications');
	}

	async get(options: GetQueryOptions) {
		return await super.get(options);
	}

	async query(options?: QueryOptions) {
		return await super.query(options);
	}

	async insert(notification) {
		return await super.insert(notification);
	}

	public update(id, notification) {
		return super.update(id, notification)
	}
}
