import { createAction, props } from "@ngrx/store";
import { PageCardData } from "../../../home/model/cardModel";

export const loadPopularPeopleList=createAction('[List-People] Popular People List');

export const loadPopularPeopleListSuccess=createAction('[List-People] Popular People List Success',props<{data:PageCardData}>());

export const loadPopularPeopleListFailure=createAction('[List-People] Popular People List Failure',props<{error:any}>());