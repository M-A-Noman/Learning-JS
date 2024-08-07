import { createAction, props } from '@ngrx/store';

export const loadTrending = createAction('[Trending] Load Trending');
export const loadTrendingSuccess = createAction('[Trending] Load Trending Success', props<{ data: any }>());
export const loadTrendingFailure = createAction('[Trending] Load Trending Failure', props<{ error: any }>());