import { getCustomRepository } from 'typeorm';
import { BillingAccountsRepository } from '../repositories';


export class BillingAccountsService {
	private repo = getCustomRepository(BillingAccountsRepository);

	async getBillingAccounts(params) {
		return await this.repo.query(params);
	}
}
