import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CityInfo } from '../city-info.model';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent implements OnInit {
  cities: CityInfo[] = [];
  filteredCities: CityInfo[] = [];
  selectedCity: CityInfo | undefined;
  filterText: string = '';
  dropdownOpen: boolean = false;

  constructor(private dataService: DataService, private selectedItem: HelperService) {}

  ngOnInit(): void {
    this.dataService.fetchCityData().subscribe({
      next: (res) => {
        this.cities = res;
        this.filteredCities = this.cities;
      }
    });
  }

  toggleDropdown(): void {
      this.dropdownOpen = !this.dropdownOpen;
  }

  selectCity(city: CityInfo): void {
    this.selectedCity = city;
    this.dropdownOpen = false;
    this.onItemSelect(city);
  }

  clearSelection(): void {
    this.selectedCity = undefined;
    this.filteredCities = this.cities;
    this.filterText = '';
    this.dropdownOpen = !this.dropdownOpen;
    this.selectedItem.selectedCity.next(this.selectedCity)
  }

  filterCities(): void {
    this.filteredCities = this.cities.filter(city =>
      city.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  onItemSelect(city: CityInfo): void {
    this.selectedItem.selectedCity.next(city);
  }
}
