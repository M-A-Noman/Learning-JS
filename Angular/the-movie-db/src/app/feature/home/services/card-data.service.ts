import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PageCardData } from '../model/cardModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  trendingButtonSwitch:BehaviorSubject<string>=new BehaviorSubject<string>("day");
  constructor(private http :HttpClient){}
  getTrending(type:string){
    return this.http.get<PageCardData>(`${environment.BASE_URL}trending/all/${type}?language=en-US`)
  }
  
}
