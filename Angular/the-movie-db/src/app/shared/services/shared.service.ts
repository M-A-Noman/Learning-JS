import { Injectable } from '@angular/core';
import { HomeFacadeService } from '../../feature/home/home-facade.service';
import { environment } from '../../../environments/environment';
import {
  PageSingleCardModel,
  PageSingleCardViewModel,
} from '../../feature/home/model/cardModel';
import { CardDataService } from '../../feature/home/services/card-data.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private cardDataService: CardDataService) {}

  switchButton(
    pageName: string,
    containerType: string,
    primaryButton: string,
    secondaryButton: string,
    defaultButtonSelected: boolean
  ) {
    switch (pageName) {
      case 'home': {
        this.switchChange(
          containerType,
          defaultButtonSelected ? primaryButton : secondaryButton
        );
      }
    }
  }

  getCardViewData(results: PageSingleCardModel[]) {
    let singleCardViewData: PageSingleCardViewModel[];

    singleCardViewData = results.map((data) => ({
      id: data.id,
      cardTitle: data.original_title || data.name,
      cardSubtitle: data.release_date || data.first_air_date,
      cardRatting: parseFloat(data.vote_average.toFixed(1)) * 10,
      cardType: data.media_type,
      cardImage:
        environment.IMAGE_BASE_URL +
        environment.IMAGE_SIZES.w300 +
        data.poster_path,
    }));
    return singleCardViewData;
  }

  private switchChange(containerType: string, currentMode: string) {
    switch (containerType) {
      case 'trending': {
        if (currentMode === 'Today') {
          this.cardDataService.trendingButtonSwitch.next('day');
        } else {
          this.cardDataService.trendingButtonSwitch.next('week');
        }
        // console.log(containerType);
        break;
      }
      case 'popular': {
        // console.log(containerType)
        if (currentMode === 'Movie') {
          this.cardDataService.popularButtonSwitch.next('movie');
        } else {
          this.cardDataService.popularButtonSwitch.next('tv');
        }
        break;
      }
    }
  }
}
