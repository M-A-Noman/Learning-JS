import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TrendingSelectors from './state/selectors/trending.selectors';
import * as TrendingActions from './state/actions/trending.action';
@Injectable({
  providedIn: 'root',
})
export class HomeFacadeService {
  trendingData$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
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
    this.store.dispatch(TrendingActions.loadTrending());
  }
}
