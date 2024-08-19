import { Injectable } from '@angular/core';
import { DetailsService } from '../../feature/details/services/details.service';
import { HomeFacadeService } from '../../feature/home/home-facade.service';
import { SharedService } from './shared.service';
import { PageSingleCardModel } from '../../feature/home/model/cardModel';

@Injectable({
  providedIn: 'root',
})
export class SharedFacadeService {
  constructor(private detailsService: DetailsService,private sharedService:SharedService) {}

  setCurrentMovieId(currentCardId: number, currentCardType: string) {
    this.detailsService.currentCardId.next(currentCardId);
    this.detailsService.currentCardType.next(currentCardType);
  }
  
  switchButton(pageName:string,containerType:string,primaryButton:string,secondaryButton:string,defaultButtonSelected:boolean){
    this.sharedService.switchButton(pageName,containerType,primaryButton,secondaryButton,defaultButtonSelected);
  }

  getSinglePageCardViewData(result:PageSingleCardModel[]){
   return this.sharedService.getCardViewData(result);
  }
}
