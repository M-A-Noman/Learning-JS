import { Component, OnInit } from '@angular/core';
import { CardDataService } from './services/card-data.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HomeFacadeService } from './home-facade.service';

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

  constructor(private facadeService: HomeFacadeService) {}

  ngOnInit() {
    this.trendingLoading$ = this.facadeService.trendingLoading$;
    this.trendingError$ = this.facadeService.trendingError$;
    this.facadeService.loadData();
    
    this.popularLoading$=this.facadeService.popularLoading$;
    this.popularError$=this.facadeService.popularError$;
    this.trendingLoading$.subscribe((res) => {
      if (res == false)
        this.trendingData$ = this.facadeService.getSingleCardViewData(this.facadeService.trendingData$);
    });
    this.popularLoading$.subscribe((res)=>{
      if(res===false){
        this.popularData$=this.facadeService.getSingleCardViewData(this.facadeService.popularData$);
      }
    })
  }
}
