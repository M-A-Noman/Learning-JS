import { createAction, props } from '@ngrx/store';
import { PageCardData } from '../../model/cardModel';

export const loadPopular = createAction('[Popular] Load Popular');
export const loadPopularSuccess = createAction('[Popular] Load Popular Success', props<{ data: PageCardData }>());
export const loadPopularFailure = createAction('[Popular] Load Popular Failure', props<{ error: PageCardData }>());