import { NotificationsData } from './notifications.interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadDataStatus } from '@lifeworks/common';

const notificationsState = createFeatureSelector<NotificationsData>(
	'notifications'
);
const getDataStatus = createSelector(notificationsState, s => s.status);

export const getNotifications = createSelector(
	notificationsState,
	s => s.entities.filter(x => !x.dismissed)
);
export const isLoaded = createSelector(
	getDataStatus,
	s => s === LoadDataStatus.loaded
);
export const getNotificationCount = createSelector(
	notificationsState,
	s => s.paging.totalRecords
);
