import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieDetailsService } from './movie-details.service';
import { CastDetails, MovieDetails, TVDetails } from '../model/details.model';
import { detailsModuleState } from '../model/details-state.mode';

import * as MovieSelector from '../state/selectors/movie-details.selectors';
import * as CastSelector from '../state/selectors/cast-details.selectors';
import * as TVSelector from '../state/selectors/tv-details.selectors';

import * as MovieAction from '../state/actions/movie-details.actions';
import * as CastAction from '../state/actions/cast-details.actions';
import * as TVAction from '../state/actions/tv-details.actions';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsFacadeService {
  movieDetailsData$: Observable<MovieDetails>;
  castDetailsData$: Observable<CastDetails>;
  tvDetailsData$: Observable<TVDetails>;

  movieDetailsLoading$: Observable<boolean>;
  castDetailsLoading$: Observable<boolean>;
  tvDetailsLoading$: Observable<boolean>;

  movieDetailsError$: Observable<any>;
  castDetailsError$: Observable<any>;
  tvDetailsError$: Observable<any>;

  constructor(
    private detailsService: MovieDetailsService,
    private store: Store<detailsModuleState>
  ) {}
  selectMovieDetails() {
    this.movieDetailsLoading$ = this.store.pipe(
      select(MovieSelector.selectMovieDetailsLoading)
    );
    this.movieDetailsData$ = this.store.pipe(
      select(MovieSelector.selectMovieDetailsData)
    );
    this.movieDetailsError$ = this.store.pipe(
      select(MovieSelector.selectMovieDetailsError)
    );
  }
  selectCastDetails() {
    this.castDetailsLoading$ = this.store.pipe(
      select(CastSelector.selectCastDetailsLoading)
    );
    this.castDetailsData$ = this.store.pipe(
      select(CastSelector.selectCastDetailsData)
    );
    this.castDetailsError$ = this.store.pipe(
      select(CastSelector.selectCastDetailsError)
    );
  }
  selectTVDetails() {
    this.tvDetailsLoading$ = this.store.pipe(
      select(TVSelector.selectTVDetailsLoading)
    );
    this.tvDetailsData$ = this.store.pipe(
      select(TVSelector.selectTVDetailsData)
    );
    this.tvDetailsError$ = this.store.pipe(
      select(TVSelector.selectTVDetailsError)
    );
  }
  
  loadData(type: string, id: number) {
    let ActionData = { type: type, id: id };
    switch (type) {
      case 'movie': {
        this.store.dispatch(MovieAction.loadMovieDetails({ data: ActionData }));
        console.log('Movie details dispatch')
        break;
      }
      case 'tv': {
        this.store.dispatch(TVAction.loadTVDetails({ data: ActionData }));
        console.log('TV details dispatch')
        break;
      }
      case 'cast': {
        this.store.dispatch(CastAction.loadCastDetails({ data: ActionData }));
        console.log('Cast details dispatch')
      }
    }
  }

  getDetails(
    type: string,
    id: number
  ): Observable<MovieDetails | CastDetails | TVDetails> {
    return this.detailsService.getDetails(type, id);
  }
}
