import { EntityRepository, AbstractRepository } from 'typeorm';
import { getPagingOptions, QueryOptions } from './common';
import { SystemTool, SystemToolResult } from '../domain-entities';
import { omit, map, assocPath, pick } from 'ramda';

@EntityRepository(SystemTool)
export class ToolsRepository extends AbstractRepository<SystemTool> {
	async single(toolGuid) {
		const results = await this.repository.findOne(toolGuid, {
			relations: ['results']
		});

		return results;
	}

	async getAllPaged(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		const results = await this.repository.findAndCount({
			select: ['guid', 'displayName', 'internalName', 'description'],
			...pagingOptions
		});

		return results;
	}

	async getResultsPaged(toolGuid: string, initiatorGuid: string, contextGuid: string, options?: QueryOptions) {
		return await this.createQueryBuilderFor(SystemToolResult, "result")
			.where("result.toolGuid = :toolGuid", {toolGuid})
			.andWhere("result.initiatorGuid = :initiatorGuid", {initiatorGuid})
			.andWhere("result.contextGuid = :contextGuid", {contextGuid})
			.getManyAndCount()
	}

	async saveResults(toolResults) {
		const r = omit(['guid', 'tool', 'toolGuid'], toolResults);
		return await this.createQueryBuilderFor(SystemToolResult, "results")
			.insert()
			.values(toolResults)
			.execute()
	}
}

@EntityRepository(SystemToolResult)
export class ToolsResultsRepository extends AbstractRepository<SystemToolResult> {

	async getResultsPaged(toolGuid: string, initiatorGuid: string, contextGuid: string, options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		const results = await this.repository.findAndCount({
			select: ['displayName', 'description', 'results', 'variables', 'createdOn'],
			where: { toolGuid, initiatorGuid, contextGuid },
			...pagingOptions
		});

		return results;
	}

	async saveResults(toolGuid: string, initiatorGuid: string, contextGuid: string, results) {
		return await this.repository.save({
			...results,
			toolGuid,
			initiatorGuid,
			contextGuid
		})
	}
}