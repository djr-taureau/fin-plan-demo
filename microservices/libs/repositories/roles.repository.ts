import { EntityRepository, AbstractRepository } from 'typeorm';
import { CreateSystemRolesQueryOptions, GetQueryOptions} from './common';
import { SystemRole } from '../domain-entities';

@EntityRepository(SystemRole)
export class SystemRoleRepository extends AbstractRepository<SystemRole> {
	async create(options: CreateSystemRolesQueryOptions) {
    return await this.repository.save(options);
  }
  async getByIds(options: Array<GetQueryOptions>) {
    return await this.repository.findByIds(options);
  }
}
