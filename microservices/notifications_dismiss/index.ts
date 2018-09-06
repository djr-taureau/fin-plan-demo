import { NotificationsService } from '../libs/services';
import "../libs/typeorm/connect";


const notifications = new NotificationsService();

export async function run(context, queueMessage) {
    context.log('JavaScript queue trigger function processed work item', queueMessage);
    
    return await notifications.dismiss({guid: queueMessage})
};