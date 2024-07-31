import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/app-state.model';
import { postStateInterface } from '../types/post-state.model';

export const selectFeature = (state: AppStateInterface) => state.posts;
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
export const postSelector = createSelector(
  selectFeature,
  (state) => state.posts
);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
