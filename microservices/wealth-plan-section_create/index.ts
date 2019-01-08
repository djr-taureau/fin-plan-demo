import "../libs/typeorm/connect";
import { WealthPlanService, WealthPlanSection } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';

export = async function run(context: Context, req: HttpRequest) {
    const wealthPlan = new WealthPlanService();
    const params = req.params;
    const body:Array<WealthPlanSection> = req.body;
    const query = req.query;
	try {
        if(body && query.template && params.firmClientGuid) {
            const results = await wealthPlan.addWealthPlanSections(
                params.firmClientGuid,
                query.template,
                body
            );
            context.res.body = results;
        } else {
            throw "Must pass a firmClientGuid, query.template and request body";
        }
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}