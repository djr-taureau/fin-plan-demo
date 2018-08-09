import { LoadDataStatus } from '@lifeworks/common';
import { NotificationsData } from './notifications.interfaces';

export const notificationsInitialState: NotificationsData = {
	status: LoadDataStatus.initial,
	entities: [],
	paging: {
		totalRecords: 0,
		totalReturned: 0,
		originalRequest: { offset: 0, limit: 0 }
	}
};
