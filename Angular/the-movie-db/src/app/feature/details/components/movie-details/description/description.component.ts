import { async } from '@angular/core/testing';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsFacadeService } from '../../../services/details.facade.service';
import { Observable } from 'rxjs';
import { MovieDetails } from '../../../models/details.model';
import { MovieDescriptionModel } from '../../../models/movie-tv-details.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent implements OnInit{
  @Input('data')detailsData:MovieDescriptionModel;
  @Input('error')detailsError$:Observable<any>;
  @Input('loading')detailsLoading$:Observable<boolean>;
  @Input('type')detailsType:string;
  descriptionData:MovieDescriptionModel;
  constructor(private facade:DetailsFacadeService){}

  ngOnInit(): void {
  }
  getGenresName(){
    let genreView:string='';
    let genres=this.detailsData.genres;
    for(let i=0;i<genres.length;i++){
      let singleGenre=genres[i];
      genreView+=singleGenre.name;
      i<genres.length-1?genreView+=',':'';
    }
    return genreView;
  }
  
}
