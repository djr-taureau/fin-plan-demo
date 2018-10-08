import {
	EntityRepository,
	AbstractRepository,
	FindManyOptions,
	FindOneOptions } from 'typeorm';
import { 
	getPagingOptions,
	QueryOptions,
	GetQueryOptions } from './common';
import { 
	ClientAccount,
	ClientMember } from '../domain-entities';

@EntityRepository(ClientAccount)
export class ClientRepository extends AbstractRepository<ClientAccount> {

	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}

	async expandedQuery(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		const query: FindManyOptions = {
			...pagingOptions,
			relations: ['owner', 'owner.profile']
		}
		return await this.repository.findAndCount(query);
	}

}


@EntityRepository(ClientMember)
export class ClientMemberRepository extends AbstractRepository<ClientMember> {

	async clientAccountGuidQuery(options: GetQueryOptions) {

		const query: FindOneOptions = {
			//select: ['clientAccount.guid'] <= I could get that to work.
			where: {
				user: {
					guid: options
				}
			},
			relations: ['clientAccount']
		}

		try {
			const results = await this.repository.findOne(query);
			return results.clientAccount.guid;
		} catch(e) {
			console.error(e);
			return null;
		}
		

	}

}

