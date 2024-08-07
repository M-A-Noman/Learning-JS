// src/app/state/effects/trending.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TrendingActions from '../actions/trending.action';
import { CardDataService } from '../../services/card-data.service';
import { CardModel } from '../../model/cardModel';

@Injectable()
export class TrendingEffects {
  constructor(
    private actions$: Actions,
    private trendingData: CardDataService,
    private http: HttpClient
  ) {}
  getCardData(data:any){
    let cardData:CardModel[];
    let temData=data['results'];
    for(let singleCard of temData){
      let newData:CardModel;
      newData.Id=singleCard.id;
      newData.BackDropPath=singleCard.backdrop_path;
      newData.CardSubtitle=singleCard.release_date;
      newData.CardTitle=singleCard.original_title;
      newData.MediaType=singleCard.media_type;
      newData.Ratting=singleCard.vote_average*10;
      console.log(singleCard);
      console.log(newData);
    }
  }
  loadTrending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrendingActions.loadTrending),
      mergeMap(() =>
        this.trendingData.getTrending().pipe(
          tap((res) => {
            console.log(res);
          }),
          map((data) => {
           this.getCardData(data);
           
            return TrendingActions.loadTrendingSuccess({ data });
          }),
          catchError((error) =>
            of(TrendingActions.loadTrendingFailure({ error }))
          )
        )
      )
    )
  );
}
