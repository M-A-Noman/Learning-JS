import { createReducer, on } from '@ngrx/store';
import { postStateInterface } from '../types/post-state.model';
import * as PostAction from './action';
export const initialState: postStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};
export const reducers = createReducer(
  initialState,
  on(PostAction.getPosts, (state) => {
    return { ...state, isLoading: true };
  }),
  on(PostAction.getPostsSuccess, (state, action) => {
    return { ...state, isLoading: false, posts: action.posts };
  }),
  on(PostAction.getPostsFailure, (state, action) => {
    return { ...state, isLoading: false, error: action.error };
  })
);
