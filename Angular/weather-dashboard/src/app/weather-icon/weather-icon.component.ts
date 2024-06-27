import { Component, OnInit } from '@angular/core';
import { CityInfo } from '../city-info.model';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrl: './weather-icon.component.css'
})
  
export class WeatherIconComponent implements OnInit {
  selectedCity: CityInfo;
  constructor(private citySelected: HelperService) { }
  
  ngOnInit(): void {
    this.citySelected.selectedCity.subscribe(
      (city:CityInfo) => {
        this.selectedCity = city;
        console.log(this.selectedCity);
      }
    )
  }
  
}
