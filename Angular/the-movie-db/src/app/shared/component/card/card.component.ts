import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input('name') cardTitle: string = 'Card Title';
  @Input('image') imagePath: string = '';
  @Input('subtitle') cardSubtitle: string = 'Card Subtitle';

  onClickCard(movieId: string) {
    console.log(movieId);
  }
}
