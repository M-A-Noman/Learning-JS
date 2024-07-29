import { Component, Input } from '@angular/core';
// @use '@angular/material' as mat;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',

})
export class TestComponent {
  
 @Input('name') cardTitle:string='Card Title';
 @Input('image') imagePath:string='Image path for the card image';
 @Input('subtitle') cardSubtitle:string='Card Subtitle';

  onClickCard(movieId:string){
    console.log(movieId)

  }
}
