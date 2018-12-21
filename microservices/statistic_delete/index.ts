import "../libs/typeorm/connect";
import { StatisticService } from '../libs/services';
import {
    errorResponse,
} from '../libs/function-utilities';

export async function run(context, req) {
    const statistics = new StatisticService();
    const params = req.params;

	try {
		if(params.statisticGuid) {
            
            const results = await statistics.deleteStatistic({
                guid: params.statisticGuid,
            });
            context.res.body = results;
		} else {
			throw new Error("Must pass a statisticGuid.");
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}