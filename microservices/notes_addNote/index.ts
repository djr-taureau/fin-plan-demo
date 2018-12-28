import '../libs/typeorm/connect';
import { NotesService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const notes = new NotesService();

	try {
        if(req.body && req.body.note) {
            const results = await notes.createNote(req.body);
		    context.res.body = results;
        } else {
            throw 'Request body requires a notes property'
        }
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
