import { Component, OnInit } from '@angular/core';
import { DetailsFacadeService } from '../../services/details.facade.service';
import { Observable } from 'rxjs';
import { MovieDetails, TVDetails } from '../../models/details.model';
import { ActivatedRoute } from '@angular/router';
import { MovieDescriptionModel } from '../../models/movie-tv-details.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit {
  detailsLoading$: Observable<boolean>;
  detailsData: MovieDescriptionModel;
  detailsError$: Observable<any>;
  detailsType: string;
  constructor(
    private facade: DetailsFacadeService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.detailsType = this.activeRoute.snapshot.params['type'];
    console.log(this.detailsType);
    if (this.detailsType == 'movie') {
      this.facade.selectMovieDetails();
      this.detailsLoading$ = this.facade.movieDetailsLoading$;
      this.detailsError$ = this.facade.movieDetailsError$;
    } else {
      // console.log(object)
      this.facade.selectTVDetails();
      this.detailsLoading$ = this.facade.tvDetailsLoading$;
      this.detailsError$ = this.facade.tvDetailsError$;
    }
    // this.detailsLoading$ = this.facade.movieDetailsLoading$;
    // this.detailsError$ = this.facade.movieDetailsError$;
    if (this.detailsLoading$ != null) {
      console.log('from details')
      this.detailsLoading$.subscribe((res) => {
        if (res === false) {
          this.detailsData = this.facade.getDescription(this.detailsType);
          console.log('details data', this.detailsData);
        }
      });
    }
  }
}
