import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input('name') cardTitle: string = 'Card Title';
  @Input('image') imagePath: string = 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp';
  @Input('subtitle') cardSubtitle: string = 'Card Subtitle';

  onClickCard(movieId: string) {
    console.log(movieId);
  }
}
