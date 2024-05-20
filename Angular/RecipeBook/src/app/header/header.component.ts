import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureType = new EventEmitter<string>();
  constructor(private router:ActivatedRoute,private cloud:DataStorageService) {
    
  }
  onSaveData() {
    this.cloud.postData();
   }
  onGetData() {
    this.cloud.fetchData();
  }
  // onClick(feature:string) {
  //   this.router.params.subscribe(
  //     (params: Params) => {
        
  //     }
  //   )
  // }

}
