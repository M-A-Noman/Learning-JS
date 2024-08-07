import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  constructor(private http :HttpClient){}
  getTrending(){
    return this.http.get(`${environment.BASE_URL}trending/all/day?language=en-US`)
  }
  
}
