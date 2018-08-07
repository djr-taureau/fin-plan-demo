import { User } from './auth.interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadDataStatus } from '@lifeworks/common';

const authState = createFeatureSelector<User>('auth');

export const getUser = createSelector(authState, s => s);
