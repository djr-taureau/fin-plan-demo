import '../libs/typeorm/connect';
import { BillingAccountsService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const accounts = new BillingAccountsService();
	
	try {
		const results = await accounts.getBillingAccounts(req.query);
		context.res.body = queryResponse(req.query, results);
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
