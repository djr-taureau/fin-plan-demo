import { createFeatureSelector, createSelector } from '@ngrx/store';
import { prop, propOr, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus, isTrue, isFalse } from '@lifeworks/common';

import { TasksData } from './tasks.interfaces';
import { TaskItem, TaskItems } from '../models';

const TasksState = createFeatureSelector<TasksData>(
	'Tasks'
);

const ENTITIES_PROPERTY = prop('entities');
const STATUS_PROPERTY = propOr('status', '');
const IS_DISMISSED = propEq('dismissed', true);
const IS_NOT_DISMISSED = propEq('dismissed', false);
const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

const dataStatus = createSelector(TasksState, STATUS_PROPERTY);

export const isLoaded = createSelector(TasksState, IS_LOADED);
export const isLoading = createSelector(TasksState, IS_LOADING);

export const allTasks = createSelector(
	TasksState,
	pipe(ENTITIES_PROPERTY, values)
);

export const allTasksCount = createSelector(allTasks, length);

export const undismissedTasks = createSelector(allTasks, x =>
	x.filter(IS_NOT_DISMISSED)
);

export const undismissedCount = createSelector(
	undismissedTasks,
	length
);

export const dismissedTasks = createSelector(allTasks, x =>
	x.filter(IS_DISMISSED)
);

export const dismissedCount = createSelector(dismissedTasks, length);

export const filterTasks = filter =>
	createSelector(allTasks, x => x.filter(IS_DISMISSED));

export const filterCount = filter =>
	createSelector(filterTasks(filter), length);
