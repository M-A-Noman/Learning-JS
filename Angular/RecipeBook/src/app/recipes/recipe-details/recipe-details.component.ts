import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  details: Recipe;
  id: number;
  constructor(private shoppingService: ShoppingService, private router: ActivatedRoute,private recipeService:RecipeService) { }
  ngOnInit(): void {
    this.router.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.details = this.recipeService.getSingleRecipe(this.id);
    })
  }
  toShoppingList() {
    for (let item of this.details.ingredients){
      this.shoppingService.onAddClicked(item,item);
      }
  }
  onDelete() {
    this.recipeService.onDelete(this.id);
  }
}
