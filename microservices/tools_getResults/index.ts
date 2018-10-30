import '../libs/typeorm/connect';
import { ToolsService } from '../libs/services';
import { queryResponse, errorResponse } from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';

export = async function run(context: Context, req: HttpRequest) {
	const service = new ToolsService();
	const toolGuid = req.params.tool;
	const initiatorGuid = req.params.initiator;
	const contextGuid = req.params.context;
	const pagingOptions = req.query;

	try {
		const results = await service.GetResults(
			toolGuid,
			initiatorGuid,
			contextGuid,
			pagingOptions
		);
		context.res.body = queryResponse(req.query, results);
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
};
