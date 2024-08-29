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
   getAPIParams({
    adult = false,
    video = false,
    language = 'en-US',
    pageNo = 1,
    releaseDate_gte = '',
    releaseDate_lte = '',
    sortBy = 'popularity.desc',
    voteAverage_gte = 0.0,
    voteAverage_lte = 10.0,
    voteCount_gte = 0,
    voteCount_lte = 0,
    withGenres = '',
    withKeyword = '',
    query='',
    isForSearch=false
  } = {}) {
    return this.sharedService.createQParams(adult, video, language, pageNo, releaseDate_gte, releaseDate_lte, sortBy, voteAverage_gte, voteAverage_lte, voteCount_gte, voteCount_lte, withGenres, withKeyword,query,isForSearch);
  }
  
}
