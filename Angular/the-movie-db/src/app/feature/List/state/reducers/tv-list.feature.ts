import { createFeature, createReducer, on } from "@ngrx/store";
import { initialListState } from "../../models/list-state.model";
import * as TVListActions from "../actions/tv-list.actions"
const reducers=createReducer(
    initialListState,
    on(TVListActions.loadTVList,state=>({...state,loading:true})),
    on(TVListActions.loadTVListSuccess,(state,{data})=>({
        ...state,
        loading:false,
        data:{
            ...state.data,
            page:data.page,
            results:[...state.data.results,...data.results]
        }
    })),
    on(TVListActions.loadTVListFailure,(state,{error})=>({...state,loading:false,error:error}))
);

export const TVListFeature=createFeature({
    name:'TV-List',
    reducer:reducers
});

export const {
    name,
    reducer,
    selectData,
    selectError,
    selectLoading
}=TVListFeature;