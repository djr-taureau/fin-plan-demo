import "../libs/typeorm/connect";
import { WealthPlanService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';

export = async function run(context: Context, req: HttpRequest) {
    const wealthPlan = new WealthPlanService();
	try {
		const results = await wealthPlan.listSystemWealthPlans();
		context.res.body = results;
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}