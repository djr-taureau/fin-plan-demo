import { ActivityLogData } from './activity-log.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadDataStatus } from '@lifeworks/core';

const activityLogState = createFeatureSelector<ActivityLogData>('activityLog');
const getDataStatus = createSelector(activityLogState, s => s.status);

export const getActivityLogs = createSelector(
	activityLogState,
	s => s.entities
);
export const isLoaded = createSelector(
	getDataStatus,
	s => s === LoadDataStatus.loaded
);
