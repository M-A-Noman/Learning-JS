import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureType = new EventEmitter<string>();
  constructor() {
    
  }
  onClick(feature:string) {
    this.featureType.emit(feature)
  }

}
