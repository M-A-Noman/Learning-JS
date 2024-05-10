import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { ShoppingService } from '../../shopping-list/shopping.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  @Input() details: Recipe;
  constructor(private shoppingService:ShoppingService){}
  toShoppingList() {
    for (let item of this.details.ingredients){
      this.shoppingService.onAddClicked(item);
      }
  }
}
