import { createFeatureSelector, createSelector } from '@ngrx/store';
import { prop, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus } from '@lifeworks/common';

import { PermissionsData } from './permissions.interfaces';

const permissionsState = createFeatureSelector<PermissionsData>('permissions');

const ENTITIES_PROPERTY = prop('entities');

// todo: Move to Common/State
const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

export const isLoaded = createSelector(permissionsState, IS_LOADED);
export const isLoading = createSelector(permissionsState, IS_LOADING);

export const allPermissions = createSelector(
	permissionsState,
	pipe(ENTITIES_PROPERTY, values) //todo: make a helper getStateEntities in common/state
);

export const allPermissionsCount = createSelector(allPermissions, length);
