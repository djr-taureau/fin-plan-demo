import { getCustomRepository } from 'typeorm';
import { map } from "ramda";
import { Subject } from "./common";
import { isEventGridMessageQueue } from "../function-utilities";
import { NotificationsRepository } from '../repositories';
import { Notification } from '../domain-entities'

//Services
import { TemplatesService } from './templates.service';
import { AudienceService } from './audience.service';

//Entities
import { EntityScope } from '../domain-entities/common'

export class NotificationsService {
    private repo = getCustomRepository(NotificationsRepository);
    private templatesService = new TemplatesService();
    private audienceService = new AudienceService();

    /**
     * 
     * @param audience Array of system-user guids to push notification to.
     * @param notificationData Object -> notificationType:string, message:string (hyrdated template)
     * 
     * ```
     * 
     * notificationData = {
     *   notificationType: "string",
     *   message: "string (hydrated template)"
     * }
     * 
     * ```
     */
    private formAudienceNotifications(audience, notificationData) {
        const createNotifications = entity => {
            return Object.assign(new Notification(),  {
                    notification_type: notificationData.notificationType,
                    message: notificationData.message,
                    dismissed: false,
                    context: {
                        scope: EntityScope.User,
                        entity
                    }
                }   
            );    
        }

        return map(createNotifications, audience);
    }

    private async processNotifications(params) {
        const subject = params.subject;

        switch(subject) {
            /**
             * case Subject
             * ```
             * params = {
             *   subject: "NewSystemUserCreated",
             *   profile: {
             *       users profile data
             *   },
             *   notificationType: "string",
             *   context: EntityContext
             * }
             * 
             */
            case Subject.NewSystemUserCreated:
            
            let values = {};
            
            if(isEventGridMessageQueue(params)) {
                values['data'] = params.data.profile;
                values['context'] = params.data.context;
                values['notificationType'] = params.data.notificationType;
            } else {
                values['data'] = params.profile;
                values['context'] = params.context;
                values['notificationType'] = params.notificationType;
            }

            const template = await this.templatesService.getSystemTemplate(
                'notifications/newSystemUserCreated.txt', {...values['data']}
            );

            const audience = await this.audienceService.getAudience(values['context']);

            return this.formAudienceNotifications(audience, {
                notificationType: values['notificationType'],
                message: template 
            });

        }

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


    /**
     * 
     * @param params 
     * 
     * ```
     * params = {
     *   subject: Subject
     *   data: {
     *     context: EntityContext,
     *     notificationType: string,
     *     
     *     ...etc
     *     this will dump into the template for the notification and
     *     must contain data that template hydration will convert
     *   }
     * }
     * ```
     * 
     */
    async createNotification(params) {
        const notifications = await this.processNotifications(params);
        return await this.repo.insert(notifications);
    }

}