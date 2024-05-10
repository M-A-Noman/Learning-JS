import { Component, OnInit } from '@angular/core';
import { CityInfo } from '../city-info.model';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent implements OnInit{
  selectedCity: CityInfo;
  constructor(private selectedFromCitySelector:HelperService) { }
  ngOnInit(): void {
    this.selectedFromCitySelector.selectedCity.subscribe(
      (city:CityInfo) => {
        this.selectedCity = city;
      }
    );
  }

}
