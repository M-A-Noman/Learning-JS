import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as TrendingSelectors from './state/selectors/trending.selectors';
import * as TrendingActions from './state/actions/trending.action';
import { PageCardData, PageSingleCardViewModel } from './model/cardModel';
import { environment } from '../../../environments/environment';
import { CardDataService } from './services/card-data.service';
@Injectable({
  providedIn: 'root',
})
export class HomeFacadeService {
  trendingData$: Observable<PageCardData>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store, private cardDataService:CardDataService) {
    this.trendingData$ = this.store.pipe(
      select(TrendingSelectors.selectTrendingData)
    );
    this.loading$ = this.store.pipe(
      select(TrendingSelectors.selectTrendingLoading)
    );
    this.error$ = this.store.pipe(
      select(TrendingSelectors.selectTrendingError)
    );
  }
  loadData(){
    this.cardDataService.trendingButtonSwitch.subscribe((res)=>{

      this.store.dispatch(TrendingActions.loadTrending({data:res}));
    })
  }

  switchChange(containerType:string,currentMode:string){
    switch(containerType){
      case 'trending':{
        if(currentMode==='Today'){
          this.cardDataService.trendingButtonSwitch.next('day');
        }else{
          this.cardDataService.trendingButtonSwitch.next('week');
        }
        break;
      }
      
    }
  }

  getSingleCardViewData(){
    let singleCardViewData:PageSingleCardViewModel[]
    this.trendingData$.subscribe(
      (res)=>{
        
        let results=res.results;
        console.log(res);
        singleCardViewData=results.map((data)=>({
          id:data.id,
          cardTitle:data.original_title || data.name,
          cardSubtitle:data.release_date || data.first_air_date,
          cardRatting:parseFloat(data.vote_average.toFixed(1))*10,
          cardImage:environment.IMAGE_BASE_URL+environment.IMAGE_SIZES.w300+data.poster_path
        }));
      }
    )
    return of( singleCardViewData);
  }

}
