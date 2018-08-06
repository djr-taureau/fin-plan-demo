import { NotificationsData } from './notifications.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadDataStatus } from '@lifeworks/core';

const notificationsState = createFeatureSelector<NotificationsData>(
	'notifications'
);
const getDataStatus = createSelector(notificationsState, s => s.status);

export const getNotifications = createSelector(
	notificationsState,
	s => s.entities
);
export const isLoaded = createSelector(
	getDataStatus,
	s => s === LoadDataStatus.loaded
);
export const getNotificationCount = createSelector(
	notificationsState,
	s => s.paging.totalRecords
);
