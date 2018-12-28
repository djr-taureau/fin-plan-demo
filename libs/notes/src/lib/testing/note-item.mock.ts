import { NoteItem } from '../models';
import { Subject } from 'rxjs';
import { Obj, DomainSubject } from '@lifeworks/common';

export const MOCK_NOTE: NoteItem = {
	guid: '1',
  name: 'test note',
  note: '<p>html note content here</p>',
  entityContext: 1,
  owner: {
    guid: '1234',
    displayName: 'Donald Davis',
    entityType: 'User'
  },
  createdBy: 'string',
  modifiedBy: 'string',
	timestamps: {
		createdOn: new Date(),
		modifiedOn: new Date()
	}
};
