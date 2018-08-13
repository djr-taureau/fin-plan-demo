import { LoadDataStatus } from '@lifeworks/common';
import { NotificationsData } from './notifications.interfaces';

export const notificationsInitialState: NotificationsData = {
	status: LoadDataStatus.initial,
	entities: {}
};
