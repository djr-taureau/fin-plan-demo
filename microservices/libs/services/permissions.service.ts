import { getCustomRepository, DeepPartial } from 'typeorm';
import { PermissionsRepository } from '../repositories';
import { SystemPermission } from '../domain-entities';

export class PermissionsService {
    private repo = getCustomRepository(PermissionsRepository);

    async getPermissions(params) {
        return await this.repo.query(params)
    }

    async create(permission: DeepPartial<SystemPermission>) {
        return await this.repo.insert(permission);
    }

}