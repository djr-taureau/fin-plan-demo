import { ContentService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';

export = async function run(context: Context, request: HttpRequest) {
    const content = new ContentService();
	try {
		//todo - validate query params
		const result = await content.getAsset(request.params.container, request.params.blob);
		if (result && result.readableStreamBody){
			context.res.status = 200;
			context.res.headers = {
				'Content-Type': result.contentType,
				'Content-Length': result.contentLength
			};
			context.res.body = result.readableStreamBody.read(result.contentLength);
		}
	} catch (err) {
		context.res.status = err.statusCode || 500;
		context.res.body = errorResponse(err);
	}
}
