import { getCustomRepository } from 'typeorm';
import { ClientRepository } from '../repositories';


export class ClientsService {
	private repo = getCustomRepository(ClientRepository);

	async getClients(params) {
		return await this.repo.expandedQuery(params);
	}
}
