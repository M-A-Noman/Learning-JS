import { createAction, props } from "@ngrx/store";
import { CastDetails } from "../../model/details.model";

export const loadCastDetails=createAction('[Details] Movie Details',props<{data:{id:number,type:string}}>());
export const loadCastDetailsSuccess=createAction('[Details] Movie Details Success', props<{data:CastDetails}>());
export const loadCastDetailsFailure=createAction('[Details] Movie Details Failure',props<{error:any}>());