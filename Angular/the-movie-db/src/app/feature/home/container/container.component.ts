import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  @Input('type') containerType: string = '';
  containerHeading: string = 'Trending';
  containerDefaultButton: string = 'Today';
  containerSecondaryButton: string = 'This week';
  isDefaultSelected: boolean = true;

  toggleContainerButton(){
    this.isDefaultSelected=!this.isDefaultSelected
  }

}
