import '../libs/typeorm/connect';
import { TemplatesService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const templates = new TemplatesService();
	
	try {
		// const results = await templates.getTemplate(req.query.applicationContext, req.query.template, req.query.data );
		// context.res.body = queryResponse(req.query, results);
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
