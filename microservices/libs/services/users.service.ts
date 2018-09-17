import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories';

export class UsersService {
    private repo = getCustomRepository(UsersRepository);

    async getUsers(params) {
        return await this.repo.query(params)
    }

}