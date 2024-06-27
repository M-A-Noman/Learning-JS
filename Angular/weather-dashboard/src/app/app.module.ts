import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DataService } from './data.service';
import { HelperService } from './helper.service';
import {  HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    WeatherIconComponent,
    DropdownDirective,
    SearchComponent,
    // SelectCityComponent,
    CitySelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // CitySelectorComponent,
   
  ],
  providers: [DataService,HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
