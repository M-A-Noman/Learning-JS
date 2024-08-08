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
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private facadeService: HomeFacadeService) {}

  ngOnInit() {
    this.loading$ = this.facadeService.loading$;
    this.error$ = this.facadeService.error$;
    this.facadeService.loadData();
    // this.trendingData$.subscribe(
    //   (res)=>{
    //     if(res)
    //     console.log(res);
    //   }
    // )
    this.loading$.subscribe((res) => {
      if (res == false)
        this.trendingData$ = this.facadeService.getSingleCardViewData();
      // this.trendingData$.subscribe(
      //   (res)=>{
      //     console.log(res);
      //   }
      // )
    });
  }
}
