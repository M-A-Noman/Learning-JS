import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { CityInfo } from "./city-info.model";
@Injectable()
export class DataService implements OnInit{
    constructor(private http: HttpClient) { }
    ngOnInit(): void {
        
    }
    fetchCityData() {
        // console.log(this.http.get('../assets/Data/city-data.json'))
        return this.http.get<CityInfo[]>('../assets/Data/city-data.json');
    }
}