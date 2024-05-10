import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { CityInfo } from "./city-info.model";
import { DataService } from "./data.service";

@Injectable()
export class HelperService implements OnInit
{
    selectedCity = new EventEmitter<CityInfo>();
    
    constructor() { }
    ngOnInit(): void {
        
    }

}