import { createReducer, on } from '@ngrx/store';

import * as TVListAction from '../actions/tv-list.actions';
import { initialListState } from '../../models/list-state.model';

export const popularTVListReducers = createReducer(
  initialListState,
  on(TVListAction.loadPopularTVList, (state) => ({ ...state, loading: true })),
  on(TVListAction.loadPopularTVListSuccess, (state, { data }) => ({
    ...state,
    data: {
        ...state.data,
        page:data.page,
        results:[...state.data.results,...data.results]
    },
    loading: false,
  })),
  on(TVListAction.loadPopularTVListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);

export const airingTodayTVListReducers = createReducer(
  initialListState,
  on(TVListAction.loadAiringTodayTVList, (state) => ({
    ...state,
    loading: true,
  })),
  on(TVListAction.loadAiringTodayTVListSuccess, (state, { data }) => ({
    ...state,
    data: {
        ...state.data,
        page:data.page,
        results:[...state.data.results,...data.results]
    },
    loading: false,
  })),
  on(TVListAction.loadAiringTodayTVListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);

export const onTVListReducers = createReducer(
  initialListState,
  on(TVListAction.loadOnTVList, (state) => ({ ...state, loading: true })),
  on(TVListAction.loadOnTVListSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: {
        ...state.data,
        page:data.page,
        results:[...state.data.results,...data.results]
    },
  })),
  on(TVListAction.loadOnTVListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);

export const topRattedTVListReducers = createReducer(
  initialListState,
  on(TVListAction.loadTopRattedTVList, (state) => ({
    ...state,
    loading: true,
  })),
  on(TVListAction.loadTopRattedTVListSuccess, (state, { data }) => ({
    ...state,
    data: {
        ...state.data,
        page:data.page,
        results:[...state.data.results,...data.results]
    },
    loading: false,
  })),
  on(TVListAction.loadTopRattedTVListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);
