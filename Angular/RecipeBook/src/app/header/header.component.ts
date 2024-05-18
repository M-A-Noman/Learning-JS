import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureType = new EventEmitter<string>();
  constructor(private router:ActivatedRoute) {
    
  }
  // onClick(feature:string) {
  //   this.router.params.subscribe(
  //     (params: Params) => {
        
  //     }
  //   )
  // }

}
