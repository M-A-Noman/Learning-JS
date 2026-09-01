import { Injectable } from '@angular/core';
import { SharedService } from '../shared/service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedService:SharedService) { }
  multiply(firstNumber:number,secondNumber:number){
    this.sharedService.printConsole()
    return firstNumber*secondNumber;
  }
}
