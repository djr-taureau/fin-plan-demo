import { NotificationsRepository } from '../repositories';

export class NotificationsService {
    private repo: NotificationsRepository;

    constructor() {
        this.repo = new NotificationsRepository();
    }

    async getNotifications(params) {
        return await this.repo.query(params);
    }

    async getNotification(params) {
        return await this.repo.get(params);
    }

    async dismiss(params) {
        return await this.repo.update(params.guid, { dismissed: true })
    }

    async createNotification(item) {
        return await this.repo.insert(item);
    }

}