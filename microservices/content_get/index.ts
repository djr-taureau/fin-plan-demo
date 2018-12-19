import { ContentService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';
import { SystemContentType, ApplicationContext } from "../libs/services/common";

export = async function run(context: Context, request: HttpRequest) {
	const content = new ContentService();
	const params = request.params;
	const SYSTEM_CONTENT_TYPE: SystemContentType = params.contentType

	try {
		if (params.context && params.blob) {

			const contentContext:Array<any> = content.parseApiContext(params.context);
			const applicationContext:ApplicationContext = contentContext[0];
			const entityGuid:string = contentContext[1];

			const result = await content.getContent(applicationContext, params.blob, SYSTEM_CONTENT_TYPE, entityGuid);

			if (request.query['output']) {
				context.res.headers = {
					'Content-Type': 'application/json'
				}
				context.res.body = {
					headers: {
						'Content-Type': result.metadata.contentType,
						'Content-Length': result.metadata.contentLength
					},
					metadata: result.metadata,
					request: params.blob,
					url: content.getBlobUrl(applicationContext, params.blob, SYSTEM_CONTENT_TYPE, entityGuid)
				};
				return;
			}

			if(result.metadata.contentType.indexOf('image') >= 0) {
				context.res.headers = {
					'Content-Type': result.metadata.contentType,
					'Content-Length': result.metadata.contentLength
				}
				context.res.body = result.content;
				return;
			} else {
				context.res.headers = {
					'Content-Type': 'application/json'
				}
				context.res.body = result;
				return;
			}
		} else {
			throw new Error("1 or more params are missing in the request")
		}
	} catch (err) {
		context.res.status = err.statusCode || 500;
		context.res.body = errorResponse(err);
	}
}