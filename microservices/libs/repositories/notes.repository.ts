import { Note } from '../domain-entities';
import { EntityRepository, AbstractRepository, DeepPartial } from 'typeorm';
import { QueryOptions, getPagingOptions } from './common';

@EntityRepository(Note)
export class NotesRepository extends AbstractRepository<Note> {
	async get(guid: string) {
		return await this.repository.findOne(guid);
	}

	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}

	async insert(note: DeepPartial<Note>) {
		return await this.repository.save(note);
	}

	async update(guid: string, note: DeepPartial<Note>) {
		return await this.repository.update(guid, note);
	}
}
