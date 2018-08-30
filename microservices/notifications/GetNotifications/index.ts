import { NotificationDb } from '../lib/repository';
import { handleError } from "../../utils/errors";
import { processResult, countResults, totalRecords } from "../../utils/processor";
import { map, merge, assoc, pick, compose, omit } from 'ramda';

//TODO: remove mock data
const mockData = {
    "target": {
        "guid": "03c706d1-d431-48b0-8e08-4442fc4cdf21",
        "displayName": "Marshall Sheppard",
        "entityType": "user"
    },
    "source": {
        "guid": "7a4133b5-1aec-469a-9fa3-7aedd37c73cd",
        "displayName": "Candace Joyce",
        "entityType": "user"
    },
    "subject": {
        "guid": "76554b75-2a8d-4d93-947f-8657d8bce7e1",
        "displayName": "veniam occaecat",
        "entityType": "document"
    },
}

const mockedValues = results => map(merge(mockData), results);

const createTimestamps = t => assoc('timestamps', pick(['created_on', 'modified_on'], t), t);
const wrapTimestamps = values => merge(values, assoc('results', map(compose(omit(['created_on', 'modified_on']), createTimestamps), values.results), []));



const db = new NotificationDb();

export function run(context, req) {
    context.log.info('JavaScript HTTP trigger function processed a request.');

    if(req.query) {
        Promise.all([db.getNotifications(req.query), db.getAllNotifications()])
            .then(values => {
                processResult(context, req, [
                    countResults,
                    totalRecords(values[1].length),
                    wrapTimestamps
                ])(mockedValues(values[0]));
            })
            .catch(handleError(context));
    } else {
        db.getAllNotifications()
            .then(results => {
                processResult(context, req, [
                    countResults,
                    totalRecords(results.length),
                    wrapTimestamps
                ])(mockedValues(results));
            })
            .catch(handleError(context));
    }
    
    
}