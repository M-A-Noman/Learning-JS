import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  // providers:[RecipeService]
})
export class RecipeListComponent implements OnInit{
  // @Output('itemDetails') details = new EventEmitter<Recipe>();
  recipes: Recipe[];
  constructor(private recipeService:RecipeService) {
    
  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

  // onDetailsGet(itemDetails:Recipe) {
    // this.details.emit(itemDetails);
   
  // }
//   getName(item: Recipe) {
//     return item.name;
//   }
//   getDescription(item: Recipe) {
//     return item.description;
//   }
//   getImage(item: Recipe) {
//     return item.imagePath;
  //   }
  
}
