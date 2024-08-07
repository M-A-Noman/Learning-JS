import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeFacadeService } from '../../home-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements OnInit {
  @Input('type') containerType: string = '';
  @Input('heading') containerHeading: string = 'Trending';
  @Input('defaultButton') containerDefaultButton: string = 'Today';
  @Input('secondaryButton') containerSecondaryButton: string = 'This week';
  isDefaultSelected: boolean = true;

  trendingData$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private facadeService: HomeFacadeService) {}
  ngOnInit() {
    this.trendingData$ = this.facadeService.trendingData$;
    this.loading$ = this.facadeService.loading$;
    this.error$ = this.facadeService.error$;
    this.facadeService.loadData();
  }

  toggleContainerButton() {
    this.isDefaultSelected = !this.isDefaultSelected;
  }
}
