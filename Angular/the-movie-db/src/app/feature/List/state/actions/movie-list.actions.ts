import { createAction, props } from "@ngrx/store";
import { PageCardData } from "../../../home/model/cardModel";

// Popular

export const loadPopularMovieList=createAction('[List-Movie] Popular Movie List');

export const loadPopularMovieListSuccess=createAction('[List-Movie] Popular Movie List Success',props<{data:PageCardData}>())

export const loadPopularMovieListFailure=createAction('[List-Movie] Popular Movie List Failure',props<{error:any}>())

// NowPlaying

export const loadNowPlayingMovieList=createAction('[List-Movie] NowPlaying Movie List');

export const loadNowPlayingMovieListSuccess=createAction('[List-Movie] NowPlaying Movie List Success',props<{data:PageCardData}>());

export const loadNowPlayingMovieListFailure=createAction('[List-Movie] NowPlaying Movie List Failure',props<{error:any}>());

// Upcoming

export const loadUpcomingMovieList=createAction('[List-Movie] Upcoming Movie List');

export const loadUpcomingMovieListSuccess=createAction('[List-Movie] Upcoming Movie List Success',props<{data:PageCardData}>());

export const loadUpcomingMovieListFailure=createAction('[List-Movie] Upcoming Movie List Failure',props<{error:any}>());

// TopRatted

export const loadTopRattedMovieList=createAction('[List-Movie] TopRatted Movie List');

export const loadTopRattedMovieListSuccess=createAction('[List-Movie] TopRatted Movie List Success',props<{data:PageCardData}>());

export const loadTopRattedMovieListFailure=createAction('[List-Movie] TopRatted Movie List Failure',props<{error:any}>());

