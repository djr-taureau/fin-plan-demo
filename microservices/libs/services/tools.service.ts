import { getCustomRepository } from 'typeorm';
import { ToolsRepository, ToolsResultsRepository } from '../repositories';

export class ToolsService {
	private toolsRepo = getCustomRepository(ToolsRepository);
	private resultsRepo = getCustomRepository(ToolsResultsRepository);

	async getTools(params) {
		return await this.toolsRepo.getAllPaged(params);
	}

	async GetResults(
		toolGuid: string,
		initiatorGuid: string,
		contextGuid: string,
		pagingOptions
	) {
		return await this.resultsRepo.getResultsPaged(
			toolGuid,
			initiatorGuid,
			contextGuid,
			pagingOptions
		);
	}

	async runLifeInsurance(variables) {
		return {
			total1: 1,
			total2: 2,
			total3: 3,
			total4: 4
		};
	}

	async RunTool(toolGuid, variables) {
		const tool = await this.toolsRepo.single(toolGuid);

		let results;
		switch (tool.internalName) {
			case 'life-insurance':
				results = this.runLifeInsurance(variables);
				break;
		}

		return results;
	}

	async saveResult(
		toolGuid: string,
		initiatorGuid: string,
		contextGuid: string,
		results
	) {
		return await this.resultsRepo.saveResults(
			toolGuid,
			initiatorGuid,
			contextGuid,
			results
		);
	}
}
