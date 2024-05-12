import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CityInfo } from '../city-info.model';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.css'
})
  
export class CitySelectorComponent implements OnInit {
  cities: CityInfo[] = [];
  selectedCity: string | undefined;
  constructor(private dataService: DataService,private selectedItem:HelperService) { }
  ngOnInit(): void {
    this.dataService.fetchCityData().subscribe({
      next: (res) => {  
        console.log(res);
        for (let item of res) {
          this.cities.push(item)
        }
    }})
  }

  onItemSelect(city) {
    // console.log(city);
    this.selectedItem.selectedCity.emit(city);
  }
  
}
