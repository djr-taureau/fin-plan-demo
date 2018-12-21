import "../libs/typeorm/connect";
import { StatisticService } from '../libs/services';
import { EntityScope } from '../libs/domain-entities/common'
import {
    errorResponse,
    capitalize
} from '../libs/function-utilities';

export async function run(context, req) {
    const statistics = new StatisticService();
    const params = req.params;

	try {
		if(params.entityScope && params.entityGuid) {
            const entityContext = {
                scope: EntityScope[capitalize(params.entityScope)],
                entity: params.entityGuid
            };
            
            const results = await statistics.getStatistic(entityContext);
            context.res.body = results;
		} else {
			throw new Error("Must pass an entityScope, entityGuid, and request body");
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}