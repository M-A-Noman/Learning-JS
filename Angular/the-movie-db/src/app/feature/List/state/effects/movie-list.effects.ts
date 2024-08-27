// import { inject, Injectable } from '@angular/core';
// import * as MovieAction from '../actions/movie-list.actions';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { ListFacadeService } from '../../services/list-facade.service';
// import { catchError, map, mergeMap, of, tap } from 'rxjs';


// @Injectable()
// export class PopularMovieListEffects {
//   constructor(private Action$: Actions,private listFacade:ListFacadeService) {}
//   loadPopularMovieList$ = createEffect(() =>
//     this.Action$.pipe(
//       ofType(MovieAction.loadPopularMovieList),
//       mergeMap((props) =>
//         this.listFacade.getList(props.data.type,props.data.subType,props.data.pageNo).pipe(
//             tap(()=>console.log('effect called from popular movie')),
//           map((data) => MovieAction.loadPopularMovieListSuccess({ data })),
//           catchError((error) =>
//             of(MovieAction.loadPopularMovieListFailure({ error }))
//           )
//         )
//       )
//     )
//   );
// }

// @Injectable()
// export class NowPlayingMovieListEffects {
//   constructor(private Action$: Actions,private listFacade:ListFacadeService) {}
//   loadNowPlayingMovieList$ = createEffect(() =>
//     this.Action$.pipe(
//       ofType(MovieAction.loadNowPlayingMovieList),
//       mergeMap((props) =>
//         this.listFacade.getList(props.data.type,props.data.subType,props.data.pageNo).pipe(
//           map((data) => MovieAction.loadNowPlayingMovieListSuccess({ data })),
//           catchError((error) =>
//             of(MovieAction.loadNowPlayingMovieListFailure({ error }))
//           )
//         )
//       )
//     )
//   );
// }

// @Injectable()
// export class UpcomingMovieListEffects {
//   constructor(private Action$: Actions,private listFacade:ListFacadeService) {}
//   loadUpcomingMovieList$ = createEffect(() =>
//     this.Action$.pipe(
//       ofType(MovieAction.loadUpcomingMovieList),
//       mergeMap((props) =>
//         this.listFacade.getList(props.data.type,props.data.subType,props.data.pageNo).pipe(
//           map((data) => MovieAction.loadUpcomingMovieListSuccess({ data })),
//           catchError((error) =>
//             of(MovieAction.loadUpcomingMovieListFailure({ error }))
//           )
//         )
//       )
//     )
//   );
// }

// @Injectable()
// export class TopRattedMovieListEffects {
//   constructor(private Action$: Actions,private listFacade:ListFacadeService) {}
//   loadTopRattedMovieList$ = createEffect(() =>
//     this.Action$.pipe(
//       ofType(MovieAction.loadTopRattedMovieList),
//       mergeMap((props) =>
//         this.listFacade.getList(props.data.type,props.data.subType,props.data.pageNo).pipe(
//           map((data) => MovieAction.loadTopRattedMovieListSuccess({ data })),
//           catchError((error) =>
//             of(MovieAction.loadTopRattedMovieListFailure({ error }))
//           )
//         )
//       )
//     )
//   );
// }


// using factory function to reduce code duplication
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { ListFacadeService } from '../../services/list-facade.service';
import * as MovieAction from '../actions/movie-list.actions';
import * as TVAction from '../actions/tv-list.actions';
import * as PeopleAction from '../actions/people-list.actions'

@Injectable()
export class MovieListEffects {
  constructor(private actions$: Actions, private listFacade: ListFacadeService) {}

  createListEffect(actionType, successAction, failureAction) {
    return createEffect(() =>
      this.actions$.pipe(
        ofType(actionType),
        mergeMap((props) =>
          this.listFacade.getList(props.data.type, props.data.subType, props.data.queryParams).pipe(
            // tap(()=>console.log('effect called')),
            map((data) => successAction({ data })),
            catchError((error) => of(failureAction({ error })))
          )
        )
      )
    );
  }
  
  createListEffect1(actionType, successAction, failureAction) {
    return createEffect(() =>
      this.actions$.pipe(
        ofType(actionType),
        mergeMap((props) =>
          this.listFacade.getList(props.data.type, props.data.subType, props.data.queryParams).pipe(
            // tap(()=>console.log('effect called')),
            map((data) => successAction({ data })),
            catchError((error) => of(failureAction({ error })))
          )
        )
      )
    );
  }

  loadMovieList$=this.createListEffect1(
    MovieAction.loadMovieList,
    MovieAction.loadMovieListSuccess,
    MovieAction.loadMovieListFailure
  );
 loadMoreMovieList$=this.createListEffect1(
  MovieAction.loadMoreMovieList,
  MovieAction.loadMoreMovieListSuccess,
  MovieAction.loadMoreMovieListFailure
 )

  loadTVList$=this.createListEffect1(
    TVAction.loadTVList,
    TVAction.loadTVListSuccess,
    TVAction.loadTVListFailure
  );
  
loadMoreTVList$=this.createListEffect1(
  TVAction.loadMoreTVList,
  TVAction.loadMoreTVListSuccess,
  TVAction.loadMoreTVListFailure
)

  loadPopularMovieList$ = this.createListEffect(
    MovieAction.loadPopularMovieList,
    MovieAction.loadPopularMovieListSuccess,
    MovieAction.loadPopularMovieListFailure
  );

  loadNowPlayingMovieList$ = this.createListEffect(
    MovieAction.loadNowPlayingMovieList,
    MovieAction.loadNowPlayingMovieListSuccess,
    MovieAction.loadNowPlayingMovieListFailure
  );

  loadUpcomingMovieList$ = this.createListEffect(
    MovieAction.loadUpcomingMovieList,
    MovieAction.loadUpcomingMovieListSuccess,
    MovieAction.loadUpcomingMovieListFailure
  );

  loadTopRatedMovieList$ = this.createListEffect(
    MovieAction.loadTopRattedMovieList,
    MovieAction.loadTopRattedMovieListSuccess,
    MovieAction.loadTopRattedMovieListFailure
  );

  loadPopularTVList$=this.createListEffect(
    TVAction.loadPopularTVList,
    TVAction.loadPopularTVListSuccess,
    TVAction.loadPopularTVListFailure
  )
  loadAiringTodayTVList$=this.createListEffect(
    TVAction.loadAiringTodayTVList,
    TVAction.loadAiringTodayTVListSuccess,
    TVAction.loadAiringTodayTVListFailure
  )
  loadOnTVList$=this.createListEffect(
    TVAction.loadOnTVList,
    TVAction.loadOnTVListSuccess,
    TVAction.loadOnTVListFailure
  )
  loadTopRattedTVList$=this.createListEffect(
    TVAction.loadTopRattedTVList,
    TVAction.loadTopRattedTVListSuccess,
    TVAction.loadTopRattedTVListFailure
  )
  loadPopularPeopleList$=this.createListEffect(
    PeopleAction.loadPopularPeopleList,
    PeopleAction.loadPopularPeopleListSuccess,
    PeopleAction.loadPopularPeopleListFailure
  )

}
