import { Component, OnInit } from '@angular/core';
import { HelperService } from './helper.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isOpen = false;
  title = 'weather-dashboard';
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.fetchCityData().subscribe({
      next: (res) => {
            // this.cities = res;
           console.log((res));
           console.log(typeof(res));
  }});
  }
}
