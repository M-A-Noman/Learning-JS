import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CastDetails, MovieDetails, TVDetails } from '../model/details.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  currentCardId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentCardType:BehaviorSubject<string>=new BehaviorSubject<string>(null);

  
  constructor(private http: HttpClient) {}
  getDetails(type: string, id: number) {
    return this.http.get<MovieDetails | CastDetails | TVDetails>(
      `${environment.BASE_URL}/${type}/${id}?language=en-US`
    ).pipe(
      tap((data)=>{console.log('API data',data,'\ntype of data', typeof(data))})
    );
  }
}
