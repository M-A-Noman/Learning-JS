import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { CityInfo } from "./city-info.model";
import { DataService } from "./data.service";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class HelperService implements OnInit
{
    selectedCity = new BehaviorSubject<CityInfo>(undefined);
    
    constructor() { }
    ngOnInit(): void {
        
    }

}