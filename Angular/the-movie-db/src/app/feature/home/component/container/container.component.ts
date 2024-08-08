import { Component, Input, OnInit } from '@angular/core';

import { PageSingleCardViewModel } from '../../model/cardModel';
import { Observable } from 'rxjs';
import { HomeFacadeService } from '../../home-facade.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent  {
  @Input('type')containerType:string;
  @Input('content') containerContent$:Observable<PageSingleCardViewModel[]>;
  @Input() loading$:Observable<any>;
  @Input('heading') containerHeading: string = '';
  @Input('defaultButton') containerDefaultButton: string = '';
  @Input('secondaryButton') containerSecondaryButton: string = '';
  isDefaultSelected: boolean = true;
  constructor(private homeFacade:HomeFacadeService){}
 
  toggleContainerButton() {
    this.isDefaultSelected = !this.isDefaultSelected;
    this.homeFacade.switchChange(this.containerType,this.isDefaultSelected?this.containerDefaultButton:this.containerSecondaryButton)
  }
}
