import "../libs/typeorm/connect";
import { WealthPlanService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';

export = async function run(context: Context, req: HttpRequest) {
    const wealthPlan = new WealthPlanService();
    const params = req.params;
    const query = req.query;
    
	try {
		const results = await wealthPlan.createFirmClientWealthPlan(
            params.firmClientGuid,
            (query.name !== undefined) ? query.name : '',
            (query.template !== undefined) ? query.template : '',
        );
		context.res.body = results;
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}