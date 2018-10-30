import { createFeatureSelector, createSelector } from '@ngrx/store';
import { prop, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus } from '@lifeworks/common';

import { ToolsData } from './tools.interfaces';

const toolsState = createFeatureSelector<ToolsData>('tools');

const ENTITIES_PROPERTY = prop('entities');

// todo: Move to Common/State
const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

export const isLoaded = createSelector(toolsState, IS_LOADED);
export const isLoading = createSelector(toolsState, IS_LOADING);


export const all = createSelector(
	toolsState,
	pipe(ENTITIES_PROPERTY, values)
);
