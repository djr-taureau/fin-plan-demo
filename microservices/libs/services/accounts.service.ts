import { getCustomRepository } from 'typeorm';
import { AccountRepository } from '../repositories';


export class AccountsService {
	private repo = getCustomRepository(AccountRepository);

	async getAccounts(params) {
		return await this.repo.query(params);
	}
}
