import { ActivityLogService } from '../libs/services';
import "../libs/typeorm/connect";

const activityLogs = new ActivityLogService();

export async function run(context, req) {
    context.res.body = await activityLogs.getActivityLogs(req.query);
}