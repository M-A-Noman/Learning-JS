import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  finalDetails:Recipe;
  onItemDetails(details: Recipe) {
    this.finalDetails = details;
  }
}
