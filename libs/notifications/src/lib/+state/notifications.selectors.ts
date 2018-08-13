import { createFeatureSelector, createSelector } from '@ngrx/store';
import { prop, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus, isTrue, isFalse } from '@lifeworks/common';

import { NotificationsData } from './notifications.interfaces';
import { NotificationItem, NotificationItems } from '../models';

const notificationsState = createFeatureSelector<NotificationsData>(
	'notifications'
);

const STATUS_PROPERTY = prop('status');
const IS_DISMISSED = propEq('dismissed', true);
const IS_NOT_DISMISSED = propEq('dismissed', false);
const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

const dataStatus = createSelector(notificationsState, STATUS_PROPERTY);

export const isLoaded = createSelector(notificationsState, IS_LOADED);
export const isLoading = createSelector(notificationsState, IS_LOADING);

export const allNotifications = createSelector(
	notificationsState,
	pipe(prop('entities'), values)
);

export const allNotificationsCount = createSelector(allNotifications, length);

export const undismissedNotifications = createSelector(allNotifications, x =>
	x.filter(IS_NOT_DISMISSED)
);

export const undismissedCount = createSelector(
	undismissedNotifications,
	length
);

export const dismissedNotifications = createSelector(allNotifications, x =>
	x.filter(IS_DISMISSED)
);

export const dismissedCount = createSelector(dismissedNotifications, length);
