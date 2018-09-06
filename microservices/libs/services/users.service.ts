import { UsersRepository } from '../repositories';

export class UsersService {
    private repo: UsersRepository;

    constructor() {
        this.repo = new UsersRepository();
    }

    async getUser(params) {
        this.repo.get(params);
    }

    async getUsers(params) {
        this.repo.query(params)
    }

    async createUser(user) {
        this.repo.insert(user);
    }

    async updateUser() {}
}