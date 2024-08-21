import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class FilterComponent {
  sortTypes = [
    { viewValue: 'Popularity Descending', queryValue: 'popularity.desc' },
    { viewValue: 'Popularity Ascending', queryValue: 'popularity.asc' },
    { viewValue: 'Rating Descending', queryValue: 'rating.desc' },
    { viewValue: 'Rating Ascending', queryValue: 'rating.asc' },
    { viewValue: 'Release Date Descending', queryValue: 'primary_release_date.desc' },
    { viewValue: 'Release Date Ascending', queryValue: 'primary_release_date.asc' },
    { viewValue: 'Title (A-Z)', queryValue: 'title.desc' },
    { viewValue: 'Title (Z-A)', queryValue: 'title.asc' },
      
  ];
  genres = [
    { name: 'Action', id: 1 },
    { name: 'Adventure', id: 2 },
    { name: 'Animation', id: 3 },
    { name: 'Comedy', id: 4 },
    { name: 'Crime', id: 5 },
    { name: 'Documentary', id: 6 },
    { name: 'Drama', id: 7 },
    { name: 'Family', id: 8 },
    { name: 'Fantasy', id: 9 },
    { name: 'History', id: 10 },
    { name: 'Horror', id: 11 },
    
  ];
  selectedSortType = this.sortTypes[0].queryValue;
  selectedInitialReleaseDate;
  selectedFinalReleaseDate;
}
