import { Component, OnInit } from '@angular/core';
import { MovieDetailsFacadeService } from './services/movie-details.facade.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  movie$;
  constructor(private detailsFacade:MovieDetailsFacadeService,private store:Store){}
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
