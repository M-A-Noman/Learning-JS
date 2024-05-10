import { Component, OnInit } from '@angular/core';
import { CityInfo } from '../city-info.model';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent implements OnInit{
  currentTime: string;
  currentDate: string;

  selectedCity: CityInfo;
  constructor(private selectedFromCitySelector:HelperService) { }
  ngOnInit(): void {
    this.selectedFromCitySelector.selectedCity.subscribe(
      (city:CityInfo) => {
        this.selectedCity = city;
      }
    );


    const currentDateObj: Date = new Date();
    
    // Extracting current time
    this.currentTime = currentDateObj.toLocaleTimeString(); // Get current time

    // Extracting current day and date
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = currentDateObj.toLocaleDateString(undefined, options); // Get current day and date

  }
  date: Date = new Date();

}
