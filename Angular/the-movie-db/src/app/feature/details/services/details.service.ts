import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CastDetails, CommonDetails, MovieDetails, TVDetails } from '../models/details.model';
import { environment } from '../../../../environments/environment';
import { MovieDescriptionModel } from '../models/movie-tv-details.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
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
  convertMinuteToHour(time:number):string{
    let hour:number=0;
    let minute:number=0;
    hour=time/60;
    minute=time%60;
    let stringTime:string=hour>0?hour.toString()+'h':''+minute.toString()+'m';
    return stringTime;

  }
  getShortDescription(data$:Observable<MovieDetails>):MovieDescriptionModel{
    let shortDescription:MovieDescriptionModel;
    // console.log(data$);
    data$.subscribe((res)=>{
      // console.log('from details service',res)
      // let commonDetails:CommonDetails=res.common_details
      // console.log('common details',commonDetails);
      shortDescription=
      {
        background_image:environment.IMAGE_BASE_URL+environment.POSTER_SIZES.w780+res.poster_path,
        title:res.title,
        release_date:res.release_date,
        genres:res.genres,
        runtime:this.convertMinuteToHour(res.runtime),
        ratting:parseFloat(res.vote_average.toFixed(1))*10,
        tagline:res.tagline,
        overview:res.overview,
      }

    })
    console.log('from the service', shortDescription)
    return shortDescription;
  }
}
