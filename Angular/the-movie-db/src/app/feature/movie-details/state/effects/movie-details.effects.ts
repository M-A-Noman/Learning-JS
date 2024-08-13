import { Injectable } from '@angular/core';
import * as MovieAction from '../actions/movie-details.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieDetailsFacadeService } from '../../services/movie-details.facade.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
@Injectable()
export class movieDetailsEffects {
  constructor(
    private Action$: Actions,
    private detailsFacade: MovieDetailsFacadeService
  ) {}
  loadMovieDetails$ = createEffect(() =>
    this.Action$.pipe(
      ofType(MovieAction.loadMovieDetails),
      mergeMap((action) =>
        this.detailsFacade.getDetails(action.data.type, action.data.id).pipe(
          tap(() => {
            console.log('call from movie effect');
          }),
          map((data) => MovieAction.loadMovieDetailsSuccess({ data })),
          catchError((error) =>
            of(MovieAction.loadMovieDetailsFailure({ error }))
          )
        )
      )
    )
  );
}
