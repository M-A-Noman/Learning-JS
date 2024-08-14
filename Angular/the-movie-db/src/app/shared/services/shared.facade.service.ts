import { Injectable } from '@angular/core';
import { DetailsService } from '../../feature/details/services/details.service';
import { HomeFacadeService } from '../../feature/home/home-facade.service';

@Injectable({
  providedIn: 'root',
})
export class SharedFacadeService {
  constructor(private detailsService: DetailsService,private homeFacade:HomeFacadeService) {}

  setCurrentMovieId(currentCardId: number, currentCardType: string) {
    this.detailsService.currentCardId.next(currentCardId);
    this.detailsService.currentCardType.next(currentCardType);
  }
  switchButton(pageName:string,containerType:string,primaryButton:string,secondaryButton:string,defaultButtonSelected:boolean){
    switch (pageName){
      case 'home':{
        this.homeFacade.switchChange(containerType,defaultButtonSelected?primaryButton:secondaryButton)
      }
    }
  }
}
