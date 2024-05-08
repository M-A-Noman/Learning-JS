import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input('Recipe') recipeName: Recipe;
  // @Output('onDetails') detailsRecipe = new EventEmitter<void>();

  constructor(private recipeService:RecipeService) {
    
  }
  onClickRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipeName);
  }

  getName() {
    return this.recipeName.name;
  }
  getDescription() {
    return this.recipeName.description;
  }
  getImage() {
    return this.recipeName.imagePath;
  }
}
