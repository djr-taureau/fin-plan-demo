import "../libs/typeorm/connect";
import { ActivityLogService } from '../libs/services';
import { Context } from '../libs/azure-function-types';

export = async function run(context: Context, activityLogMessage) {
    const activityLogs = new ActivityLogService();

    if(activityLogMessage && activityLogMessage.subject) {
        return await activityLogs.saveActivityLogs(activityLogMessage);
    } else {
        context.log.error('The message is empty or does not contain a subject');
    }
};