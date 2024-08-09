import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as TrendingSelectors from './state/selectors/trending.selectors';
import * as PopularSelectors from './state/selectors/popular.selector';
import * as TrendingActions from './state/actions/trending.action';
import * as PopularActions from './state/actions/popular.action';
import { PageCardData, PageSingleCardViewModel } from './model/cardModel';
import { environment } from '../../../environments/environment';
import { CardDataService } from './services/card-data.service';
import { HomeModuleState } from './state/reducers/home.reducer';
@Injectable({
  providedIn: 'root',
})
export class HomeFacadeService {
  trendingData$: Observable<PageCardData>;
  trailerData$: Observable<PageCardData>;
  popularData$: Observable<PageCardData>;

  trendingLoading$: Observable<boolean>;
  trailerLoading$: Observable<boolean>;
  popularLoading$: Observable<boolean>;

  trendingError$: Observable<any>;
  trailerError$: Observable<any>;
  popularError$: Observable<any>;

  constructor(
    private store: Store<HomeModuleState>,
    private cardDataService: CardDataService
  ) {
    // TRENDING DATA
      this.trendingData$ = this.store.pipe(
        select(TrendingSelectors.selectTrendingData)
      );
      this.trendingLoading$ = this.store.pipe(
        select(TrendingSelectors.selectTrendingLoading)
      );
      this.trendingError$ = this.store.pipe(
        select(TrendingSelectors.selectTrendingError)
      );

      // POPULAR DATA
      this.popularData$=this.store.pipe(
        select(PopularSelectors.selectPopularData)
      );
      this.popularLoading$=this.store.pipe(
        select(PopularSelectors.selectPopularLoading)
      );
      this.popularError$=this.store.pipe(
        select(PopularSelectors.selectPopularError)
      );

  }
  loadData() {
    this.cardDataService.trendingButtonSwitch.subscribe((res) => {
      this.store.dispatch(TrendingActions.loadTrending({ data: res }));
    });
    this.cardDataService.popularButtonSwitch.subscribe((res) => {
      this.store.dispatch(PopularActions.loadPopular({ data: res }));
    });
  }

  switchChange(containerType: string, currentMode: string) {
    switch (containerType) {
      case 'trending': {
        if (currentMode === 'Today') {
          this.cardDataService.trendingButtonSwitch.next('day');
        } else {
          this.cardDataService.trendingButtonSwitch.next('week');
        }
        console.log(containerType);
        break;
      }
      case 'popular': {
        console.log(containerType)
        if (currentMode === 'Movie') {
          this.cardDataService.popularButtonSwitch.next('movie');
        } else {
          this.cardDataService.popularButtonSwitch.next('tv');
        }
        break;
      }
    }
  }

  getSingleCardViewData( data$:Observable<PageCardData>) {
    let singleCardViewData: PageSingleCardViewModel[];
    data$.subscribe((res) => {
      let results = res.results;
      console.log(res);
      singleCardViewData = results.map((data) => ({
        id: data.id,
        cardTitle: data.original_title || data.name,
        cardSubtitle: data.release_date || data.first_air_date,
        cardRatting: parseFloat(data.vote_average.toFixed(1)) * 10,
        cardImage:
          environment.IMAGE_BASE_URL +
          environment.IMAGE_SIZES.w300 +
          data.poster_path,
      }));
    });
    return of(singleCardViewData);
  }
}
