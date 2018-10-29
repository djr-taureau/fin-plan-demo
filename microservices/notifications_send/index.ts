import "../libs/typeorm/connect";
import { NotificationsService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context } from '../libs/azure-function-types';


export = async function run(context: Context, queueMessage) {
    const notifications = new NotificationsService();

    return await notifications.createNotification(queueMessage);    
};