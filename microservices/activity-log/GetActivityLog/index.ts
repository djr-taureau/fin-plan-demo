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

const mockedValues = results => map(merge(mockData), results);


const db = new ActivityLogDb();

export function run(context, req) {
    context.log.info('JavaScript HTTP trigger function processed a request.');
    if(req.query) {
        Promise.all([db.getActivityLogs(req.query), db.getAllActivityLogs()])
        .then(values => {            
            processResult(context, req, [
                countResults,
                totalRecords(values[1].length)
            ])(mockedValues(values[0]));
        })
        .catch(handleError(context));
    } else {
        db.getAllActivityLogs()
        .then(results => {            
            processResult(context, req, [
                countResults,
                totalRecords(results.length)
            ])(mockedValues(results));
        })
        .catch(handleError(context));
    }
}