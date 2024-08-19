import { createReducer, on } from "@ngrx/store";
import { initialListState } from "../../models/list-state.model";
import * as PeopleAction from "../actions/people-list.actions"
export const popularPeopleListReducers=createReducer(
    initialListState,
    on(PeopleAction.loadPopularPeopleList,state=>({...state,loading:true})),
    on(PeopleAction.loadPopularPeopleListSuccess,(state,{data})=>({...state,loading:false,data:data})),
    on(PeopleAction.loadPopularPeopleListFailure,(state,{error})=>({...state,error:error,loading:false}))

);