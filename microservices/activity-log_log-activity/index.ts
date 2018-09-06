import { ActivityLogService } from '../libs/services';
import "../libs/typeorm/connect";


const activityLogs = new ActivityLogService();

export async function run(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    activityLogs.saveActivityLogItem(req.body);

};