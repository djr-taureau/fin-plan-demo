import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories';
import { getValueAs } from '../function-utilities';

export class SettingsService {
    private repo = getCustomRepository(SettingsRepository);

    async createSetting(params) {
        return await this.repo.create(params);
    }

    async getSettings(params) {
        return await this.repo.get(params);
    }

    async updateSettings(params) {
        await this.repo.update(params.guid, params);
        return await this.repo.get(params.entityGuid);
    }
}