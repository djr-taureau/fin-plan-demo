import { ContentService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';
import { SystemContentType } from '../libs/services/common'

export = async function run(context: Context, request: HttpRequest) {
		const content = new ContentService();
		const params = request.params;
		const SYSTEM_CONTENT_TYPE = SystemContentType.Asset

	try {
	    if (request.body && params.context && params.blob) {
			const contentContext:Array<any> = content.parseApiContext(params.context);

			const result = await content.saveContent(
					contentContext[0],
					params.blob,
					SYSTEM_CONTENT_TYPE,
					request.body,
					request.headers,
					contentContext[1]);

			if (result) {
				context.res.body = result;
			}
		}
	} catch (err) {
		context.res.status = err.statusCode || 500;
		context.res.body = errorResponse(err);
	}
}