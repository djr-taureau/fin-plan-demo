import { getCustomRepository } from 'typeorm';
import { TemplatesRepository } from '../repositories';

export class TemplatesService {
	private repo = getCustomRepository(TemplatesRepository);

    async getTemplates(params) {
        return await this.repo.query(params);
    }

    async getTemplate(params) {
        return await this.repo.get(params);
    }

}