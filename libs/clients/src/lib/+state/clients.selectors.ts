import { createFeatureSelector, createSelector } from '@ngrx/store';
import { prop, length, propEq, pipe, values } from 'ramda';
import { LoadDataStatus } from '@lifeworks/common';

import { ClientsData } from './clients.interfaces';

const clientsState = createFeatureSelector<ClientsData>('clients');

const ENTITIES_PROPERTY = prop('entities');

// todo: Move to Common/State
const IS_LOADING = propEq('status', LoadDataStatus.loading);
const IS_LOADED = propEq('status', LoadDataStatus.loaded);

export const isLoaded = createSelector(clientsState, IS_LOADED);
export const isLoading = createSelector(clientsState, IS_LOADING);

export const allClients = createSelector(
	clientsState,
	pipe(ENTITIES_PROPERTY, values)
);

export const allClientsCount = createSelector(allClients, length);
