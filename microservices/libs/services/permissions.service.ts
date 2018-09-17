import { getCustomRepository, DeepPartial } from 'typeorm';
import { PermissionsRepository } from '../repositories';
import { Permission } from '../domain-entities';

export class PermissionsService {
    private repo = getCustomRepository(PermissionsRepository);

    async getPermissions(params) {
        return await this.repo.query(params)
    }

    async create(permission: DeepPartial<Permission>) {
        return await this.repo.insert(permission);
    }

}