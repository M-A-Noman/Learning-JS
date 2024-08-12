import { createReducer, on } from "@ngrx/store";
import * as TVDetailsAction from '../actions/tv-details.actions'
import { pageDetailsState } from "../../model/details-state.mode";

export const initialTVDetailsState:pageDetailsState={
    loading:false,
    data:null,
    error:null,
}
export const tvDetailsReducers=createReducer(
    initialTVDetailsState,
    on(TVDetailsAction.loadTVDetails,state=>({...state,loading:true})),
    on(TVDetailsAction.loadTVDetailsSuccess,state=>({...state,loading:false})),
    on(TVDetailsAction.loadTVDetailsFailure,state=>({...state,loading:false}))
);