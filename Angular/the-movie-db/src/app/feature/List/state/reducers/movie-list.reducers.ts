import { createReducer, on } from '@ngrx/store';
import { initialListState, listState } from '../../models/list-state.model';
import * as MovieListAction from '../actions/movie-list.actions';

export const popularMovieListReducers = createReducer(
  initialListState,
  on(MovieListAction.loadPopularMovieList, (state) => ({
    ...state,
    loading: true,
  })),
  on(MovieListAction.loadPopularMovieListSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: {
        ...state.data,
        page:data.page,
        results:[...state.data.results,...data.results]
    },
  })),
  on(MovieListAction.loadPopularMovieListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);

export const nowPlayingMovieListReducers = createReducer(
  initialListState,
  on(MovieListAction.loadNowPlayingMovieList, (state) => ({
    ...state,
    loading: true,
  })),
  on(MovieListAction.loadNowPlayingMovieListSuccess, (state, { data }) => ({
    ...state,
    data: {
        ...state.data,
        page:data.page,
        results:[...state.data.results,...data.results]
    },
    loading: false,
  })),
  on(MovieListAction.loadNowPlayingMovieListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);

export const upcomingMovieListReducers = createReducer(
  initialListState,
  on(MovieListAction.loadUpcomingMovieList, (state) => ({
    ...state,
    loading: true,
  })),
  on(MovieListAction.loadUpcomingMovieListSuccess, (state, { data }) => ({
    ...state,
    data: {
        ...state.data,
        page:data.page,
        results:[...state.data.results,...data.results]
    },
    loading: false,
  })),
  on(MovieListAction.loadUpcomingMovieListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);

export const topRattedMovieListReducers = createReducer(
  initialListState,
  on(MovieListAction.loadTopRattedMovieList, (state) => ({
    ...state,
    loading: true,
  })),
  on(MovieListAction.loadTopRattedMovieListSuccess, (state, { data }) => ({
    ...state,
    data: {
        ...state.data,
        page:data.page,
        results:[...state.data.results,...data.results]
    },
    loading: false,
  })),
  on(MovieListAction.loadTopRattedMovieListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);
