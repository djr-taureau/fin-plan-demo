import { EntityRepository, AbstractRepository, FindManyOptions } from 'typeorm';
import { basicError, CreateSettingsQueryOptions, GetSettingsQueryOptions,
UpdateSettingsQueryOptions } from './common';
import { insertExtensions, setValueFrom } from '../function-utilities';
import { Settings } from '../domain-entities';

@EntityRepository(Settings)
export class SettingsRepository extends AbstractRepository<Settings> {
  async create(options: CreateSettingsQueryOptions) {
    try {
      options.value = setValueFrom(options.valueType, options.value);
      return await this.repository.save({ ...options });
    } catch(err) {
      basicError(err);
    }
  }

  async get(options: GetSettingsQueryOptions) {
    const query: FindManyOptions = {
      where: {
        entityGuid: options
      }
    }

    try {
      const settings = await this.repository.find(query);
      return insertExtensions({}, settings);
    } catch(err) {
      basicError(err);
    }
  }

  async update(guid, options: UpdateSettingsQueryOptions) {
    options.value = setValueFrom(options.valueType, options.value);
    return await this.repository.update(guid, { ...options });
  }
}