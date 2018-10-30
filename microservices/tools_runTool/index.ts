import '../libs/typeorm/connect';
import { ToolsService } from '../libs/services';
import { errorResponse } from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
	const service = new ToolsService();
	const toolGuid = req.params.tool;
	
	try {
		const results = await service.RunTool(toolGuid, req.body);
		context.res.body = results;
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
