import { Component, OnInit } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { genre } from '../../../details/models/details.model';
import { ListFacadeService } from '../../services/list-facade.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class FilterComponent implements OnInit{
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
  genres:Observable< genre[]>;
  selectedSortType = this.sortTypes[0].queryValue;
  selectedInitialReleaseDate;
  selectedFinalReleaseDate;

  selectedGenreId:number[]=[];
  

  constructor(private listFacadeService:ListFacadeService){}
  ngOnInit(): void {
    this.listFacadeService.getGenres().subscribe((res)=>{res.subscribe((data)=>{this.genres=of(data.genres)})
    });
  }

  onSelectGenre(id:number){
    this.selectedGenreId.find(num=> num===id)?this.selectedGenreId= this.selectedGenreId.filter(num=>num!==id):this.selectedGenreId.push(id);
  }
  isGenreSelected(id:number){
    return this.selectedGenreId.find(num=>num===id);
  }
  getStyle(id:number){
    return {
      'color': this.isGenreSelected(id)?'white':'',
      'background-color':this.isGenreSelected(id)?'rgb(40, 181, 225)':''
    };
  }
}
