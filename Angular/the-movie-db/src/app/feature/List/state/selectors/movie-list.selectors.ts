import { createSelector } from "@ngrx/store";
import { selectPopularMovieListState } from "./index.selectors";
import { listState } from "../../models/list-state.model";


export const selectPopularMovieListData=createSelector(
    selectPopularMovieListState,
    (state:listState)=>state.data
)