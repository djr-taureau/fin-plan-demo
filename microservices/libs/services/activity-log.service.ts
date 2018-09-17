import { getCustomRepository } from 'typeorm';
import { ActivityLogRepository } from '../repositories';

export class ActivityLogService {
	private repo = getCustomRepository(ActivityLogRepository);

    async getActivityLogs(params) {
        return await this.repo.query(params);
    }

    async getActivityLogsItem(params) {
        return await this.repo.get(params);
    }

    async saveActivityLogItem(activityLogItem) {
        return await this.repo.insert(activityLogItem);
    }
}