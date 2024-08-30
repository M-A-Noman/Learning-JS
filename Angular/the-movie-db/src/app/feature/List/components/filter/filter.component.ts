import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { genre } from '../../../details/models/details.model';
import { ListFacadeService } from '../../services/list-facade.service';
import { Observable, of } from 'rxjs';
import { SharedFacadeService } from '../../../../shared/services/shared.facade.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class FilterComponent implements OnInit {
  sortTypes = [
    { viewValue: 'Popularity Descending', queryValue: 'popularity.desc' },
    { viewValue: 'Popularity Ascending', queryValue: 'popularity.asc' },
    { viewValue: 'Rating Descending', queryValue: 'rating.desc' },
    { viewValue: 'Rating Ascending', queryValue: 'rating.asc' },
    {
      viewValue: 'Release Date Descending',
      queryValue: 'primary_release_date.desc',
    },
    {
      viewValue: 'Release Date Ascending',
      queryValue: 'primary_release_date.asc',
    },
    { viewValue: 'Title (A-Z)', queryValue: 'title.desc' },
    { viewValue: 'Title (Z-A)', queryValue: 'title.asc' },
  ];
  genres: Observable<genre[]>;
  selectedSortType = this.sortTypes[0].queryValue;
  selectedInitialReleaseDate;
  selectedFinalReleaseDate;
  selectedGenreId: number[] = [];
  selectedFirstUserScore: number = 0;
  selectedLastUserScore: number = 10;
  selectedUserVote: number = 0;
  SelectedFirstRuntime: number = 0;
  SelectedLastRuntime: number = 400;
  APIQueryParams: string;
  pageType: string;
  dataType: string;
  constructor(
    private listFacadeService: ListFacadeService,
    private sharedFacade: SharedFacadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.listFacadeService.getGenres().subscribe((res) => {
      res.subscribe((data) => {
        this.genres = of(data.genres);
      });
    });
    if(this.activatedRoute.queryParams)
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.selectedInitialReleaseDate = queryParams['releaseDate_gte'] || null;
      this.selectedFinalReleaseDate = queryParams['releaseDate_lte'] || null;
      this.selectedGenreId = queryParams['with_genres']
        ? queryParams['with_genres'].split(',').map(Number)
        : [];
      this.selectedSortType = queryParams['sortBy']||'popularity.desc';
      this.selectedFirstUserScore = queryParams['vote_average.gte'] || 0;
      this.selectedLastUserScore = queryParams['vote_average.lte'] || 10;
      this.selectedUserVote = queryParams['vote_count.gte'] || 0;
      // this.vote
      this.SelectedFirstRuntime = queryParams['with_runtime.gte'] || 0;
      this.SelectedLastRuntime = queryParams['with_runtime.lte'] || 400;
    });
  }

  onSelectGenre(id: number) {
    this.selectedGenreId.find((num) => num === id)
      ? (this.selectedGenreId = this.selectedGenreId.filter(
          (num) => num !== id
        ))
      : this.selectedGenreId.push(id);
  }
  isGenreSelected(id: number) {
    return this.selectedGenreId.find((num) => num === id);
  }
  getStyle(id: number) {
    return {
      color: this.isGenreSelected(id) ? 'white' : '',
      'background-color': this.isGenreSelected(id) ? 'rgb(40, 181, 225)' : '',
    };
  }

  getCurrentQueryParamObject(){
    return {
      adult: false,
      video: false,
      language: 'en-US',
      page: 1,
      releaseDate_gte: this.selectedInitialReleaseDate
        ? this.selectedInitialReleaseDate.toISOString().slice(0, 10)
        : '',
      releaseDate_lte: this.selectedFinalReleaseDate
        ? this.selectedFinalReleaseDate.toISOString().slice(0, 10)
        : '',
      sortBy: this.selectedSortType,
      vote_average_gte: this.selectedFirstUserScore,
      vote_average_lte: this.selectedLastUserScore,
      vote_count_gte: this.selectedUserVote,
      vote_count_lte: 0,
      with_genres:
        this.selectedGenreId.length > 0 ? this.selectedGenreId.toString() : '',
      with_keyword: '',
      with_runtime_gte:this.SelectedFirstRuntime,
      with_runtime_lte:this.SelectedLastRuntime
    };
  }

  onFilterClicked() {
    let queryParamObject = this.getCurrentQueryParamObject();
    this.APIQueryParams = this.sharedFacade.getAPIParams((queryParamObject));
    // console.log('current query params is',this.APIQueryParams);
    this.router.navigate([],{
      relativeTo:this.activatedRoute,
      queryParams:this.convertQueryParamsToObject(this.APIQueryParams)
    })
    // let queryParams;
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   console.log('query params from filter', this.APIQueryParams);
    //   this.pageType = params.get('list-type');
    //   this.dataType = params.get('list-subtype');
    //    queryParams = this.convertQueryParamsToObject(this.APIQueryParams);
    //    this.listFacadeService.loadData(this.pageType,this.dataType,this.APIQueryParams);

    // });
    // setTimeout(() => {
      // console.log(this.pageType);
      // if(this.pageType){
      // this.router.navigate(['list', this.pageType, this.dataType], { queryParams: queryParams });
      // }
    // },0);
  }
  private convertQueryParamsToObject(queryParamsString: string): { [key: string]: any } {
    const queryParams = new URLSearchParams(queryParamsString);
    const paramsObject: { [key: string]: any } = {};
    queryParams.forEach((value, key) => {
      paramsObject[key] = value;
    });
    return paramsObject;
  }
}
