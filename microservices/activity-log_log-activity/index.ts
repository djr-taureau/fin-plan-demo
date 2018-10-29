import "../libs/typeorm/connect";
import { ActivityLogService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const activityLogs = new ActivityLogService();

    activityLogs.saveActivityLogItem(req.body);
};