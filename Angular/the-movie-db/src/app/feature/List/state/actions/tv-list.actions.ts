import { createAction, props } from "@ngrx/store";
import { PageCardData } from "../../../home/model/cardModel";
import { listPropsType } from "../../models/list-state.model";

// Popular

export const loadPopularTVList=createAction('[List-TV] Popular TV List',props<{data:listPropsType}>());

export const loadPopularTVListSuccess=createAction('[List-TV] Popular TV List Success',props<{data:PageCardData}>());

export const loadPopularTVListFailure=createAction('[List-TV] Popular TV List Failure',props<{error:any}>());

// Airing Today 

export const loadAiringTodayTVList=createAction('[List-TV] AiringToday TV List',props<{data:listPropsType}>());

export const loadAiringTodayTVListSuccess=createAction('[List-TV] AiringToday TV List Success',props<{data:PageCardData}>());

export const loadAiringTodayTVListFailure=createAction('[List-TV] AiringToday TV List Failure',props<{error:any}>());

// On TV

export const loadOnTVList=createAction('[List-TV] On TV List',props<{data:listPropsType}>());

export const loadOnTVListSuccess=createAction('[List-TV] On TV List Success',props<{data:PageCardData}>());

export const loadOnTVListFailure=createAction('[List-TV] On TV List Failure',props<{error:any}>());

// Top Ratted

export const loadTopRattedTVList=createAction('[List-TV] TopRatted TV List',props<{data:listPropsType}>());

export const loadTopRattedTVListSuccess=createAction('[List-TV] TopRatted TV List Success',props<{data:PageCardData}>());

export const loadTopRattedTVListFailure=createAction('[List-TV] TopRatted TV List Failure',props<{error:any}>());