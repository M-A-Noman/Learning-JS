import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageCardData } from '../../home/model/cardModel';
import { environment } from '../../../../environments/environment';
import { listModuleState, listPropsType } from '../models/list-state.model';
import { select, Store } from '@ngrx/store';

import * as MovieListActions from '../state/actions/movie-list.actions';
import * as TVListActions from '../state/actions/tv-list.actions';
import * as PeopleListActions from '../state/actions/people-list.actions';

import * as MovieListSelector from '../state/selectors/movie-list.selectors';
import * as TVListSelector from '../state/selectors/tv-list.selectors';
import * as PeopleListSelector from '../state/selectors/people-list.selectors';
import { genre } from '../../details/models/details.model';
@Injectable({
  providedIn: 'root',
})
export class ListService {
  actionMap = {
    movie: {
      popular: MovieListActions.loadPopularMovieList,
      now_playing: MovieListActions.loadNowPlayingMovieList,
      upcoming: MovieListActions.loadUpcomingMovieList,
      top_rated: MovieListActions.loadTopRattedMovieList,
    },
    tv: {
      popular: TVListActions.loadPopularTVList,
      airing_today: TVListActions.loadAiringTodayTVList,
      on_the_air: TVListActions.loadOnTVList,
      top_rated: TVListActions.loadTopRattedTVList,
    },
    people: {
      popular: PeopleListActions.loadPopularPeopleList,
    },
  };
   selectorMap = {
    movie: {
      popular: {
        data: MovieListSelector.selectPopularMovieListData,
        loading: MovieListSelector.selectPopularMovieListLoading,
        error: MovieListSelector.selectPopularMovieListError,
      },
      now_playing: {
        data: MovieListSelector.selectNowPlayingMovieListData,
        loading: MovieListSelector.selectNowPlayingMovieListLoading,
        error: MovieListSelector.selectNowPlayingMovieListError,
      },
      upcoming: {
        data: MovieListSelector.selectUpcomingMovieListData,
        loading: MovieListSelector.selectUpcomingMovieListLoading,
        error: MovieListSelector.selectUpcomingMovieListError,
      },
      top_rated: {
        data: MovieListSelector.selectTopRattedMovieListData,
        loading: MovieListSelector.selectTopRattedMovieListLoading,
        error: MovieListSelector.selectTopRattedMovieListError,
      },
    },
    tv: {
      popular: {
        data: TVListSelector.selectPopularTVListData,
        loading: TVListSelector.selectPopularTVListLoading,
        error: TVListSelector.selectPopularTVListError,
      },
      airing_today: {
        data: TVListSelector.selectAiringTodayTVListData,
        loading: TVListSelector.selectAiringTodayTVListLoading,
        error: TVListSelector.selectAiringTodayTVListError,
      },
      on_the_air: {
        data: TVListSelector.selectOnTVListData,
        loading: TVListSelector.selectOnTVListLoading,
        error: TVListSelector.selectOnTVListError,
      },
      top_rated: {
        data: TVListSelector.selectTopRattedTVListData,
        loading: TVListSelector.selectTopRattedTVListLoading,
        error: TVListSelector.selectTopRattedTVListError,
      },
    },
    people: {
      popular: {
        data: PeopleListSelector.selectPopularPeopleListData,
        loading: PeopleListSelector.selectPopularPeopleListLoading,
        error: PeopleListSelector.selectPopularPeopleListError,
      },
    },
  };
  
  private genres=new BehaviorSubject<any>(null);
  constructor(
    private http: HttpClient,
    private store: Store<listModuleState>
  ) {}

  getListData(type: string, subType: string, pageNumber: number) {
    if(type==='people')type='person'
    return this.http.get<PageCardData>(
      `${environment.BASE_URL}/${type}/${subType}?language=en-US&page=${pageNumber}`
    );
  }

  loadGenres(type:string){
    this.genres.next(this.http.get(`${environment.BASE_URL}/genre/${type}/list?language=en`))
     
  }
   getGenres(){
  
    return (this.genres);
   }

  loadStoreData(type: string, subtype: string,pageNo:number) {
    const props: listPropsType = {
      type: type,
      subType: subtype,
      pageNo: pageNo,
    };

    const action =
      this.actionMap[type]?.[subtype] ;

    if (action) {
      this.store.dispatch(action({ data: props }));
    } else {
      console.log(type,subtype)
      console.error('Invalid type or subtype provided');
    }
  }

  selectListData(loadingSelector, dataSelector, errorSelector) {
    let loading$=this.store.pipe(select(loadingSelector));
    let data$=this.store.pipe(select(dataSelector));
    let error$=this.store.pipe(select(errorSelector));
    return {
      loading$:loading$,
      data:data$,
      error:error$
    }
  }

  selectStoreData(type: string, subtype: string) {
    const selectors = this.selectorMap[type]?.[subtype];
  
    if (selectors) {
      this.store.pipe(select(selectors.data)).subscribe((res)=>{
      })
      return {
        loading$: this.store.pipe(select(selectors.loading)),
        data$: this.store.pipe(select(selectors.data)),
        error$: this.store.pipe(select(selectors.error)),
      };
    } else {
      console.error('Invalid type or subtype provided for selectors');
      return null; 
    }
  }
  
}
