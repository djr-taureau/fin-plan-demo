import { getCustomRepository } from 'typeorm';
import { Subject } from "./common";
import { isEventGridMessageQueue } from '../function-utilities'
import { ActivityLogRepository } from '../repositories';

//Services
import { TemplatesService } from './templates.service';

export class ActivityLogService {
    private templatesService = new TemplatesService();
    private repo = getCustomRepository(ActivityLogRepository);
    
    private async processActivityLogs(params) {
        const subject = params.subject;

        switch(subject) {
            case Subject.NewSystemUserCreated:
                let values = {};

                if(isEventGridMessageQueue(params)) {
                    values['entityGuid'] = params.data.guid;
                    values['firstName'] = params.data.profile.firstName;
                    values['lastName'] = params.data.profile.lastName;
                } else {
                    values['entityGuid'] = params.guid;
                    values['firstName'] = params.profile.firstName;
                    values['lastName'] = params.profile.lastName;
                }

                const template = await this.templatesService.getSystemTemplate('activitylog/newSystemUserCreated.txt', {...values});
                
                return {
                    entityGuid: values['entityGuid'],
                    message: template
                }
            default:
                return params
        }
    }

    async getActivityLogs(params) {
        return await this.repo.query(params);
    }

    async getActivityLogsItem(params) {
        return await this.repo.get(params);
    }

    async saveActivityLogs(params) {
        const activityLogs = await this.processActivityLogs(params);
        return await this.repo.insert(activityLogs);
    }
}