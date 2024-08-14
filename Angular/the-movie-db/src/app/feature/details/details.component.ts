import { Component, OnInit } from '@angular/core';
import { DetailsFacadeService } from './services/details.facade.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  movie$;
  constructor(private detailsFacade:DetailsFacadeService,private store:Store){}
  ngOnInit(): void {
      this.detailsFacade.selectMovieDetails();
      // this.detailsFacade.movieDetailsData$.subscribe((res)=>{console.log('from',res)});
      // this.store.pipe(select(MovieSelector.selectMovieDetailsData)).subscribe((res)=>{
      //   // console.log('from details',res)
      //   this.movie$=res;
      // })
      // this.movie$=this.store.select(MovieSelector.selectMovieDetailsData);
      // console.log("My Movie ==> ",this.movie$)
  }
}
