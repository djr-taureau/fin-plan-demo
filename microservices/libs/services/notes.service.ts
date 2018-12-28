import { getCustomRepository } from 'typeorm';
import { NotesRepository } from '../repositories';

export class NotesService {
	private repo = getCustomRepository(NotesRepository);


    async getNotes(params) {
        return await this.repo.query(params);
    }

    async getNote(params) {
        return await this.repo.get(params);
    }

    async updatedNote(params) {
        return await this.repo.update(params.guid, params.note)
    }

    async createNote(item) {
        return await this.repo.insert(item);
    }

}
