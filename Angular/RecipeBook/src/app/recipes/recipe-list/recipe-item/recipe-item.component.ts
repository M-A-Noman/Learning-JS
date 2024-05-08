import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input('Recipe') recipeName: Recipe;
  @Output('onDetails') detailsRecipe = new EventEmitter<void>();

  constructor() {
    
  }
  onClickRecipe() {
    this.detailsRecipe.emit();
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
