import { createAction, props } from "@ngrx/store";
import { PageCardData } from "../../../home/model/cardModel";
import { listPropsType } from "../../models/list-state.model";

export const loadPopularPeopleList=createAction('[List-People] Popular People List',props<{data:listPropsType}>());

export const loadPopularPeopleListSuccess=createAction('[List-People] Popular People List Success',props<{data:PageCardData}>());

export const loadPopularPeopleListFailure=createAction('[List-People] Popular People List Failure',props<{error:any}>());