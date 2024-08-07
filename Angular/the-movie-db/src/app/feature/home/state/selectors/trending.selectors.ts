// src/app/state/selectors/trending.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TrendingState } from '../reducers/trending.reducer';

export const selectTrendingState = createFeatureSelector<TrendingState>('trending');

export const selectTrendingData = createSelector(
  selectTrendingState,
  (state: TrendingState) => state.data
);

export const selectTrendingLoading = createSelector(
  selectTrendingState,
  (state: TrendingState) => state.loading
);

export const selectTrendingError = createSelector(
  selectTrendingState,
  (state: TrendingState) => state.error
);
