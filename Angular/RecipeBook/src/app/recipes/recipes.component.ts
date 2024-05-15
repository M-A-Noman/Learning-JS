import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  finalDetails:Recipe;
  // onItemDetails(details: Recipe) {
  //    this.finalDetails = details;
  // }
  constructor(private recipeService:RecipeService){}
  ngOnInit(): void {
    
    // this.recipeService.selectedRecipe.subscribe(
    //   (recipe:Recipe) => {
    //     this.finalDetails = recipe;
    //   }
    // )
  }
}
