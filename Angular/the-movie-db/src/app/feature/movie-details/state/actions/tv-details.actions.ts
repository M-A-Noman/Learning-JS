import { createAction, props } from "@ngrx/store";
import { TVDetails } from "../../model/details.model";

export const loadTVDetails=createAction('[Details] Movie Details',props<{data:{id:number,type:string}}>());
export const loadTVDetailsSuccess=createAction('[Details] Movie Details Success', props<{data:TVDetails}>());
export const loadTVDetailsFailure=createAction('[Details] Movie Details Failure',props<{error:any}>());