import '../libs/typeorm/connect';
import { AuthService } from '../libs/services';
import { 
    errorResponse 
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';

export = async function run(context: Context, req: HttpRequest) {
    const auth = new AuthService();
    
    const id = (req.body && req.body.lwUserGuid) ? req.body.lwUserGuid : 'not_supplied';

    try {
        const lwUserContextGuids = await auth.getUserContextGuids(id);
        context.res.body = lwUserContextGuids;
    } catch (err) {
        context.res.status = 500;
        context.res.body = errorResponse(err);
    }
}