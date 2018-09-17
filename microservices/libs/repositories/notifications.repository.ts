import { Notification } from '../domain-entities';
import { EntityRepository, AbstractRepository, DeepPartial } from 'typeorm';
import { QueryOptions, getPagingOptions } from './common';

@EntityRepository(Notification)
export class NotificationsRepository extends AbstractRepository<Notification> {
	async get(guid: string) {
		return await this.repository.findOne(guid);
	}

	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}

	async insert(notification: DeepPartial<Notification>) {
		return await this.repository.save(notification);
	}

	async update(guid: string, notification: DeepPartial<Notification>) {
		return await this.repository.update(guid, notification);
	}
}
