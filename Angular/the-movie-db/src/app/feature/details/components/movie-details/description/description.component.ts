import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsFacadeService } from '../../../services/details.facade.service';
import { Observable } from 'rxjs';
import { MovieDescriptionModel } from '../../../models/movie-tv-details.model';
import { faFaceGrinBeamSweat, faFaceGrinHearts, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faList,faHeart,faBookmark,faPlay   } from '@fortawesome/free-solid-svg-icons';

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
  emoji= {
    faceSmile:faFaceSmile,
    grinHeart:faFaceGrinHearts,
    faceGrinBeamSweat : faFaceGrinBeamSweat,
    list:faList,
    heart:faHeart,
    bookMark:faBookmark,
    play:faPlay,

  }

  creators=[
    {name:'Person',role:'Director'},
    {name:'Person', role:'ScreenPlay'},
    {name:'Person', role:'Story'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},
    {name:'Person', role:'Actor'},

  ]
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
  isCommaBeThere(index:number){
    if(index<this.detailsData.genres.length-1)return ','
    return ''
  }
  
}
