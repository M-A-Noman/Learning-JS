import { Component, Input, OnInit } from '@angular/core';
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
  @Input('data')detailsData$:Observable<MovieDetails>;
  @Input('error')detailsError$:Observable<any>;
  @Input('loading')detailsLoading$:Observable<boolean>;
  @Input('type')detailsType:string;
  
  descriptionData:MovieDescriptionModel;
  constructor(private facade:DetailsFacadeService){}

  ngOnInit(): void {
    this.detailsData$.subscribe((res)=>{
      console.log('from description',res);
      console.log(this.detailsType)
    })
      // this.descriptionData=this.facade.getDescription(this.detailsType,this.detailsData$);
  }
}
