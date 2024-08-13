import { Injectable } from '@angular/core';
import * as CastAction from '../actions/cast-details.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieDetailsFacadeService } from '../../services/movie-details.facade.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
@Injectable()
export class castDetailsEffects {
  constructor(
    private Action$: Actions,
    private detailsFacade: MovieDetailsFacadeService
  ) {}
  loadCastDetails$ = createEffect(() =>
    this.Action$.pipe(
      ofType(CastAction.loadCastDetails),
      mergeMap((action) =>
        this.detailsFacade.getDetails(action.data.type, action.data.id).pipe(
          tap(() => {
            console.log('call from cast effect');
          }),
          map((data) => CastAction.loadCastDetailsSuccess({ data })),
          catchError((error) =>
            of(CastAction.loadCastDetailsFailure({ error }))
          )
        )
      )
    )
  );
}
