import { NotificationsService } from '../libs/services';
import "../libs/typeorm/connect";


const notifications = new NotificationsService();

export async function run(context, req) {
    context.res.body = await notifications.getNotifications(req.query);
}