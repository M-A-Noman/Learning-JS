import { Component, OnInit } from '@angular/core';
import { CardDataService } from './services/card-data.service';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HomeFacadeService } from './home-facade.service';
import { SearchService } from './components/static-search/services/search.service';
import { PageSingleCardViewModel } from './model/cardModel';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  trendingData$: Observable<any>;
  trailerData$: Observable<any>;
  popularData$: Observable<any>;

  trendingLoading$: Observable<boolean>;
  trailerLoading$: Observable<boolean>;
  popularLoading$: Observable<boolean>;

  trendingError$: Observable<any>;
  trailerError$: Observable<any>;
  popularError$: Observable<any>;

  searchLoading:boolean;
  searchResult:PageSingleCardViewModel[]=[];

  constructor(private facadeService: HomeFacadeService,private searchService:SearchService,private sharedFacade:SharedFacadeService) {}

  ngOnInit() {
    this.searchResult=[];
    this.facadeService.loadData();
    this.facadeService.selectTrending();
    this.facadeService.selectPopular();
    this.trendingLoading$ = this.facadeService.trendingLoading$;
    this.trendingError$ = this.facadeService.trendingError$;
    
    this.popularLoading$=this.facadeService.popularLoading$;
    this.popularError$=this.facadeService.popularError$;
    this.trendingLoading$.subscribe((res) => {
      if (res == false)
        this.trendingData$ = this.facadeService.getSingleCardViewData(this.facadeService.trendingData$);
    });
    this.popularLoading$.subscribe((res)=>{
      if(res===false){
        this.popularData$=this.facadeService.getSingleCardViewData(this.facadeService.popularData$)
        // console.log('from popular')
        // this.popularData$.subscribe((res)=>{
        //   console.log(res)
        // })
      }
    });
    this.searchService.searchLoading.subscribe((res)=>{
      if(res){
        this.searchLoading=res;
        this.searchResult=this.sharedFacade.getSinglePageCardViewData(this.searchService.searchResult);
        this.searchService.searchLoading.next(false);
      }
    })
  }
}
