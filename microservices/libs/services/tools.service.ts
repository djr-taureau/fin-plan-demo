import { getCustomRepository } from 'typeorm';
import { ToolsRepository } from '../repositories';


export class ToolsService {
	private repo = getCustomRepository(ToolsRepository);

	async getTools(params) {
		return await this.repo.getAllPaged(params);
	}
}
