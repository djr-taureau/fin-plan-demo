import "../libs/typeorm/connect";
import { StatisticService } from '../libs/services';
import {
    errorResponse,
} from '../libs/function-utilities';

export async function run(context, req) {
    const statistics = new StatisticService();
    const params = req.params;

	try {
		if(params.statisticGuid && req.body) {
            
            const results = await statistics.updateStatistic({
                guid: params.statisticGuid,
                ...req.body
            });
            context.res.body = results;
		} else {
			throw new Error("Must pass a statisticGuid, and request body");
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}