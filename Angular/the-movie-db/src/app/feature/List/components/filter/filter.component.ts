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
  onFilterClicked() {
    let queryParamObject = {
      adult: false,
      video: false,
      language: 'en-US',
      pageNo: 1,
      releaseDate_gte: this.selectedInitialReleaseDate
        ? this.selectedInitialReleaseDate.toISOString().slice(0, 10)
        : '',
      releaseDate_lte: this.selectedFinalReleaseDate
        ? this.selectedFinalReleaseDate.toISOString().slice(0, 10)
        : '',
      sortBy: this.selectedSortType,
      voteAverage_gte: this.selectedFirstUserScore,
      voteAverage_lte: this.selectedLastUserScore,
      voteCount_gte: this.selectedUserVote,
      voteCount_lte: 0,
      withGenres:
        this.selectedGenreId.length > 0 ? this.selectedGenreId.toString() : '',
      withKeyword: '',
    };
    this.APIQueryParams = this.sharedFacade.getAPIParams(queryParamObject);

    this.activatedRoute.paramMap.subscribe((params) => {
      let type = params.get('list-type');
      let subtype = params.get('list-subtype');
      const queryParams = this.convertQueryParamsToObject(this.APIQueryParams);
      this.router.navigate(['list', type, subtype], { queryParams: queryParams });
      this.listFacadeService.loadData(type,subtype,this.APIQueryParams);
    });
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
