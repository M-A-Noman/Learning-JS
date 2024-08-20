import { Injectable } from '@angular/core';
import { ListService } from './list.service';

import * as MovieListActions from "../state/actions/movie-list.actions";
import * as TVListActions from "../state/actions/tv-list.actions";
import * as PeopleListActions from "../state/actions/people-list.actions"

import * as MovieListSelector from "../state/selectors/movie-list.selectors";
import * as TVListSelector from "../state/selectors/tv-list.selectors";
import * as PeopleListSelector from "../state/selectors/people-list.selectors"
import { select, Store } from '@ngrx/store';
import { listModuleState, listPropsType } from '../models/list-state.model';




@Injectable({
  providedIn: 'root',
})
export class ListFacadeService {
   actionMap = {
    movie: {
      popular: MovieListActions.loadPopularMovieList,
      now_playing: MovieListActions.loadNowPlayingMovieList,
      upcoming: MovieListActions.loadUpcomingMovieList,
      top_ratted: MovieListActions.loadTopRattedMovieList,
    },
    tv: {
      popular: TVListActions.loadPopularTVList,
      airing_today: TVListActions.loadAiringTodayTVList,
      on_tv: TVListActions.loadOnTVList,
      top_ratted: TVListActions.loadTopRattedTVList,
    },
    people: {
      popular: PeopleListActions.loadPopularPeopleList,
    },
  };

  constructor(private listService: ListService, private store:Store<listModuleState>) {}

  // loadData(type: string, subtype: string) {
  //   let props:listPropsType={
  //     type:type,
  //     subType:subtype,
  //     pageNo:1
  //   }
  //   switch (type) {
  //     case 'movie': {
  //             switch (subtype) {
  //                 case 'popular': {
  //                   this.store.dispatch(MovieListActions.loadPopularMovieList({data:props}));
  //                   break;
  //                 }
  //                 case 'now_playing': {
  //                   this.store.dispatch(MovieListActions.loadNowPlayingMovieList({data:props}));
  //                   break;
  //                 }
  //                 case 'upcoming': {
  //                   this.store.dispatch(MovieListActions.loadUpcomingMovieList({data:props}));
  //                   break;
  //                 }
  //                 case 'top_ratted': {
  //                   this.store.dispatch(MovieListActions.loadTopRattedMovieList({data:props}));
  //                   break;
  //                 }
  //             }
  //       break;
  //     }

  //     case 'tv': {

  //             switch (subtype) {
  //                 case 'popular': {
  //                   this.store.dispatch(TVListActions.loadPopularTVList({data:props}));
  //                   break;
  //                 }
  //                 case 'airing_today': {
  //                   this.store.dispatch(TVListActions.loadAiringTodayTVList({data:props}));
  //                   break;
  //                 }
  //                 case 'on_tv': {
  //                   this.store.dispatch(TVListActions.loadOnTVList({data:props}));
  //                   break;
  //                 }
  //                 case 'top_ratted': {
  //                   this.store.dispatch(TVListActions.loadTopRattedTVList({data:props}));
  //                   break;
  //                 }
  //             }
  //       break;
  //     }

  //     case 'people': {
  //       this.store.dispatch(PeopleListActions.loadPopularPeopleList({data:props}));
  //       break;
  //     }
  //   }
  // }
  loadData(type: string, subtype: string) {
    // const props: listPropsType = {
    //   type: type,
    //   subType: subtype,
    //   pageNo: 1,
    // };
  
    // const action = this.actionMap[type]?.[subtype] || this.actionMap[type]?.popular;
    
    // if (action) {
    //   console.log('action dispatch=>')
    //   this.store.dispatch(action({ data: props }));
    // } else {
    //   console.error('Invalid type or subtype provided');
    // }
    this.listService.loadStoreData(type,subtype)
  //  let selectedData= this.selectSelectorData(MovieListSelector.selectPopularMovieListLoading,MovieListSelector.selectPopularMovieListData,MovieListSelector.selectPopularMovieListError);
  // //  console.log('selectedData =>',selectedData);
  // selectedData.loading$.subscribe((res)=>{
  //   console.log('response of data ',res);
  // })

  }
  
  selectSelectorData(loadingSelector, dataSelector, errorSelector) {
    // return {
    //   loading$: this.store.pipe(select(loadingSelector)),
    //   data$: this.store.pipe(select(dataSelector)),
    //   error$: this.store.pipe(select(errorSelector)),
    // };
    // console.log('loading selector =>',loadingSelector);
    return this.listService.selectListData(loadingSelector,dataSelector,errorSelector)
  }
  getList(type: string, subType: string, pageNumber: number) {
    return this.listService.getListData(type, subType, pageNumber);
  }
  getSelectedStoreData(type:string,subtype:string){
    return this.listService.selectStoreData(type,subtype);
  }
}
