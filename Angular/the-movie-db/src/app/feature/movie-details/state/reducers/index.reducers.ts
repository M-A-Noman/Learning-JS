import { ActionReducerMap } from "@ngrx/store";
import { detailsModuleState } from "../../model/details-state.mode";
import { castDetailsReducers } from "./cast-details.reducers";
import { movieDetailsReducers } from "./movie-details.reducers";
import { tvDetailsReducers } from "./tv-details.reducers";

export const detailsReducer:ActionReducerMap<detailsModuleState>={
    castDetails:castDetailsReducers,
    movieDetails:movieDetailsReducers,
    tvDetails:tvDetailsReducers

}