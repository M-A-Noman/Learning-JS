import { Component, OnInit } from '@angular/core';
import { CardDataService } from './services/card-data.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  // constructor(private card:CardDataService){
  //   this.card.getTrendingData().subscribe();
  // }
  


}
