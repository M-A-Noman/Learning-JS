import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input('Recipe') recipeName: { id:number, recipe: Recipe };
  // @Output('onDetails') detailsRecipe = new EventEmitter<void>();

  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) {
    
  }
  // onClickRecipe() {
  //   this.router.navigate([this.recipeName.id],{relativeTo:this.route})
  // }

  getName() {
    // console.log(this.recipeName.recipe)
    return this.recipeName.recipe.name;

  }
  getDescription() {
    return this.recipeName.recipe.description;
  }
  getImage() {
    return this.recipeName.recipe.imagePath;
  }
}
