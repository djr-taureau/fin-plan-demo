import '../libs/typeorm/connect';
import { ToolsService } from '../libs/services';
import { queryResponse, errorResponse } from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const service = new ToolsService();
	
	try {
		const results = await service.getTools(req.query);
		context.res.body = queryResponse(req.query, results);
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
