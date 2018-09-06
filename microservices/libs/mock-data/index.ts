import { map, merge } from 'ramda';

const MOCK_DATA = {
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

export const mockedValues = results => map(merge(MOCK_DATA), results);