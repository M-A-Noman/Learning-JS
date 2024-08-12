import { Injectable } from '@angular/core';
import { MovieDetailsService } from '../../feature/movie-details/services/movie-details.service';

@Injectable({
  providedIn: 'root',
})
export class SharedFacadeService {
  constructor(private detailsService: MovieDetailsService) {}

  setCurrentMovieId(currentCardId: number, currentCardType: string) {
    this.detailsService.currentCardId.next(currentCardId);
    this.detailsService.currentCardType.next(currentCardType);
  }
}
