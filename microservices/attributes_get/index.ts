import "../libs/typeorm/connect";
import { AttributeService } from '../libs/services';
import {
    errorResponse,
    capitalize
} from '../libs/function-utilities';
import { EntityScope } from "../libs/domain-entities";

export async function run(context, req) {
    const attributes = new AttributeService();
    const params = req.params;
    const body = req.body;
	try {
		if(params.entityScope && params.entityGuid) {
            const entityContext = {
                scope: EntityScope[capitalize(params.entityScope)],
                entity: params.entityGuid
            };
            
            context.res.body = await attributes.getAttributes(entityContext);
		} else {
			throw "Must pass a entityScope, entityGuid."
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}