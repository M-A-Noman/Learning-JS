import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
    sortTypes=[
      {viewValue:'Popularity Descending',queryValue:'popularity.desc'},
      {viewValue:'Popularity Ascending',queryValue:'popularity.asc'},
      {viewValue:'Rating Descending',queryValue:'rating.desc'},
      {viewValue:'Rating Ascending',queryValue:'rating.asc'},
      {viewValue:'Release Date Descending',queryValue:'primary_release_date.desc'},
      {viewValue:'Release Date Ascending',queryValue:'primary_release_date.asc'},
      {viewValue:'Title (A-Z)',queryValue:'title.desc'},
      {viewValue:'Title (Z-A)',queryValue:'title.asc'},
      
    ]
    selectedSortType=this.sortTypes[0].queryValue;
}
