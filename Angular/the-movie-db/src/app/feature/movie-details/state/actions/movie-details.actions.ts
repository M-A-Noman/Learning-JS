import { createAction, props } from "@ngrx/store";
import { MovieDetails } from "../../model/details.model";

export const loadMovieDetails=createAction('[Details] Movie Details',props<{data:{id:number,type:string}}>());
export const loadMovieDetailsSuccess=createAction('[Details] Movie Details Success', props<{data:MovieDetails}>());
export const loadMovieDetailsFailure=createAction('[Details] Movie Details Failure',props<{error:any}>());