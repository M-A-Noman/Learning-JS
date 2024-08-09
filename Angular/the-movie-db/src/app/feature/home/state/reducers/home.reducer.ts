// import { ActionReducerMap } from "@ngrx/store";
// import { trendingReducer, TrendingState } from "./trending.reducer";
// import { popularReducer, PopularState } from "./popular.reducer";

// export interface HomeModuleState{
//     trending:TrendingState,
//     popular:PopularState
// }
// export const HomeReducer:ActionReducerMap<HomeModuleState>={
//     trending:trendingReducer,
//     popular:popularReducer

// }

import { ActionReducerMap } from '@ngrx/store';
import { trendingReducer, TrendingState } from './trending.reducer';
import { popularReducer, PopularState } from './popular.reducer';

export interface HomeModuleState {
  trending: TrendingState;
  popular: PopularState;
}

export const homeReducer: ActionReducerMap<HomeModuleState> = {
  trending: trendingReducer,
  popular: popularReducer
};