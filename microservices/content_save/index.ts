import { ContentService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';
import { SystemContentType, ApplicationContext } from '../libs/services/common'

export = async function run(context: Context, request: HttpRequest) {
		const content = new ContentService();
		const params = request.params;
		const SYSTEM_CONTENT_TYPE:SystemContentType = params.contentType;

	try {
	  if (request.body && params.context && params.blob) {
			const contentContext:Array<any> = content.parseApiContext(params.context);
			const applicationContext:ApplicationContext = contentContext[0];
			const entityGuid:string = contentContext[1];

			const result = await content.saveContent(
					applicationContext,
					params.blob,
					SYSTEM_CONTENT_TYPE,
					request.body,
					request.headers,
					entityGuid);

			if (result) {
				context.res.body = result;
			}
		}
		//context.res.body = request;
	} catch (err) {
		context.res.status = err.statusCode || 500;
		context.res.body = errorResponse(err);
	}
}