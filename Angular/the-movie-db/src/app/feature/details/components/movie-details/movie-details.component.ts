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
    this.facade.selectMovieDetails();
    this.detailsLoading$ = this.facade.movieDetailsLoading$;
    this.detailsError$ = this.facade.movieDetailsError$;
    this.facade.movieDetailsLoading$.subscribe((res) => {
      if (res === false) {
        this.detailsData = this.facade.getDescription(this.detailsType);
      }
    });
  }
}
