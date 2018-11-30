import { ContentService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';
import { SystemContentType } from "../libs/services/common";

export = async function run(context: Context, request: HttpRequest) {
	const content = new ContentService();
	const params = request.params;
	const SYSTEM_CONTENT_TYPE = SystemContentType.Asset

	try {
		if (params.context && params.blob) {

			const contentContext:Array<any> = content.parseApiContext(params.context);

			const result = await content.getContent(contentContext[0], params.blob, SYSTEM_CONTENT_TYPE, contentContext[1]);
			if(result && result.readableStreamBody) {
				context.res.headers = {
					'Content-Type': result.contentType,
					'Content-Length': result.contentLength
				};
				context.res.body = result.readableStreamBody.read(result.contentLength);
			} else {
				throw "result is null or undefined or is not a readableStreamBody";
			}
		} else {	
			throw "1 or more params are missing in the request";
		}
	} catch (err) {
		context.res.status = err.statusCode || 500;
		context.res.body = errorResponse(err);
	}
}