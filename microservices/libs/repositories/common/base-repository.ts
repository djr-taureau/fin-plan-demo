import { getConnection, EntityManager } from 'typeorm';
import { has } from 'ramda';
import { EnityType } from './types';
import { QueryOptions, GetQueryOptions } from './query';

const hasSortBy = has('sortBy');
const hasSkip = has('skip');
const hasTake = has('take');
const hasFilter = has('filter');

export class BaseRepository<T> {
	public alias: string;

	constructor(
		private entityName: string,
		private entity: EnityType<T>,
		private manager?: EntityManager
	) {}

	private async getConnection() {
		return await getConnection();
	}

	public async getQueryBuilder() {
		const connection = await this.getConnection();
		const queryBuilder = connection.createQueryBuilder<T>(
			this.entityName,
			this.entityName
		);
		return queryBuilder;
	}

	public async getInsertBuilder() {
		const queryBuilder = await this.getQueryBuilder();
		return queryBuilder.insert();
	}

	public async getUpdateBuilder() {
		const queryBuilder = await this.getQueryBuilder();
		return queryBuilder.update();
	}

	public async getPagedQueryBuilder(options: QueryOptions = {}) {
		const queryBuilder = await this.getQueryBuilder();

		if (hasSortBy(options)) {
			queryBuilder.orderBy(
				options.sortBy,
				options.sortDirection || 'DESC'
			);
		}

		if (hasSkip(options)) {
			queryBuilder.skip(options.skip);
		}

		if (hasTake(options)) {
			queryBuilder.take(options.take);
		}

		return queryBuilder;
	}

	public async query(options?: QueryOptions) {
		const _query = await this.getPagedQueryBuilder(options);
		const results = await _query.getManyAndCount();
		return results;
	}

	public async get(options: GetQueryOptions) {
		const _query = await this.getQueryBuilder();
		_query.where('guid = :guid', { guid: options.guid });
		return await _query.getOne();
	}

	// todo: Fix Typings
	public async insert(item: T) {
		const _query = await this.getInsertBuilder();
		_query.values(item);

		return _query.execute();
	}

	public async update(id: any, item: T, idField = 'guid') {
		const _query = await this.getUpdateBuilder();
		_query.set(item).where(`${idField} = :id`, { id: id });

		return _query.execute();
	}

	public async eQuery(options?: QueryOptions) {
		return await this.manager.find<T>(this.entity, {
			relations: ['firms']
		});
	}
}
