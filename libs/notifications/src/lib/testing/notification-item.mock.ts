import { NotificationItem } from '../models';
import { Subject } from 'rxjs';
import { Obj, DomainSubject } from '@lifeworks/common';

export const MOCK_COMPLIANCE_NOTIFICATION: NotificationItem = {
	guid: '1',
	message:
		'{{source.displayName}} has revied the docuement {{subject.displayName}} for {{target.displayName}}',
	dismissed: false,
	notificationType: 'compliance-review-completed',
	target: {
		guid: '1234',
		displayName: 'Matthew Murdock',
		entityType: 'User'
	},
	source: {
		guid: '0987',
		displayName: 'Foggy Nelson',
		entityType: 'User'
	},
	subject: {
		guid: '0187',
		displayName: 'Frank Castles Arrest Record',
		entityType: 'compliance'
	},
	timestamps: {
		createdOn: new Date(1974, 1, 0),
		modifiedOn: new Date()
	}
};

interface MeetingEntity extends DomainSubject {
	location: string;
	time: Date;
}

export const MOCK_MEETING_NOTIFICATION: NotificationItem = {
	guid: '1',
	message:
		'[{{subject.displayName}}] location:{{subject.location}} when {{subject.time}} meeting for {{target.displayName}}',
	dismissed: false,
	notificationType: 'meeting-reminder',
	target: {
		guid: '1234',
		displayName: 'Matthew Murdock',
		entityType: 'User'
	},
	subject: {
		guid: '0666',
		displayName: 'Dance wih the devil',
		location: 'by the pale moon light',
		entityType: 'meeting',
		time: new Date()
	} as MeetingEntity,
	timestamps: {
		createdOn: new Date(),
		modifiedOn: new Date()
	}
};
