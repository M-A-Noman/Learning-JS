import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  @Input('EvenValues') evenValues: { value: number };
  constructor() {
    // console.log(this.numbers)
  }
}
