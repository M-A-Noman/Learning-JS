import { Injectable } from "@angular/core";
import * as TVAction from "../actions/tv-details.actions"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MovieDetailsFacadeService } from "../../services/movie-details.facade.service";
import { catchError, map, mergeMap, of, tap } from "rxjs";
@Injectable()
export class tvDetailsEffects{
    constructor(private Action$:Actions, private detailsFacade:MovieDetailsFacadeService){}
    loadTVDetails$=createEffect(()=>this.Action$.pipe(
        ofType(TVAction.loadTVDetails),
        mergeMap((action)=>this.detailsFacade.getDetails(action.data.type,action.data.id).pipe(
            tap(()=>{console.log('call from tv effect')}),
            map((data)=>TVAction.loadTVDetailsSuccess({data})),
            catchError((error)=>of(TVAction.loadTVDetailsFailure({error})))
        ))
    ))
}