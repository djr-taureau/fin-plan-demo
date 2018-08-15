import { ActivityLogDb } from '../lib/repository';
import { handleError } from "../../utils/errors";
import { processResult, countResults, totalRecords } from "../../utils/processor";
import { map, merge } from 'ramda';

//TODO: remove mock data  process actual data
const mockData = {
    "source": {
        "fullName": "Ronald Johnson",
        "GUID": 1234
    },
    "event": {
        "type": "client-flagged-content",
        "subject": {
            "displayName": "scenario"
        }
    }
};


const db = new ActivityLogDb();

export function run(context, req) {
    context.log.info('JavaScript HTTP trigger function processed a request.');

    // Wrap with a function decorateor
    if(req.params.id !== undefined) {
        Promise.all([db.getActivityLogByID(req.params.id), db.getAllActivityLogs()])
        .then(values => {
            context.log(values[0]);

            const mockedValues = merge(mockData, values[0]); //TODO: remove mock data  process actual data
            
            processResult(context, req, [
                countResults,
                totalRecords(values[1].length)
            ])(mockedValues);
        })
        .catch(handleError(context));
    } else {
        Promise.all([db.getAllActivityLogs(), db.getAllActivityLogs()])
        .then(values => {
            context.log(values[0]);

            const mockedValues = map(merge(mockData), values[0]); //TODO: remove mock data  process actual data
            
            processResult(context, req, [
                countResults,
                totalRecords(values[1].length)
            ])(mockedValues);
        })
        .catch(handleError(context));
    }
}