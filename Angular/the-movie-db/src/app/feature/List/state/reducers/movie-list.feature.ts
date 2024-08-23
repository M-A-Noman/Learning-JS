import { createFeature, createReducer, on } from "@ngrx/store";
import { initialListState } from "../../models/list-state.model";
import * as MovieListAction from '../actions/movie-list.actions';

const reducers = createReducer(
  initialListState,

  // Handle loadMovieList action
  on(MovieListAction.loadMovieList, (state, { data }) =>{ 
    if(state.propsData)
    console.log('props subtype is',state.propsData.subType,'\n data props subtype',data.subType);
console.log('data of the  props is',data,'\n data of the state props is',state.propsData)
    return({
    ...state,
    loading: true, // Assuming you want to set loading to true when the list is loading
    data: {
      ...state.data,
      reset: state.propsData !== null && state.propsData.subType !== data.subType,
      propsType: data,
    },
  })}),

  // Handle loadMovieListSuccess action
  on(MovieListAction.loadMovieListSuccess, (state, { data }) => { 
    console.log('from reducer reset flag is', state.reset);
    return({
    ...state,
    loading: false,
    data: {
      ...state.data,
      page: data.page,
      results: state.reset ? [...data.results] : [...state.data.results, ...data.results],
      reset: false, // Reset the `reset` flag after use
    },
  })}),

  // Handle loadMovieListFailure action
  on(MovieListAction.loadMovieListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);


export const MovieFeature=createFeature({
    name:'Movie-List',
    reducer:reducers,
    
})

export const{
    name,
    reducer,
    selectData,
    selectError,
    selectLoading

}=MovieFeature