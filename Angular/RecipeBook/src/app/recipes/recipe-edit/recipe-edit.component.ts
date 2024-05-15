import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
  recipeForEdit: Recipe;
  id: number;
  isNew = false;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        // console.log(param['new']);
        if (param['id'] == undefined) {
          this.isNew = true;
         }
        else {
          this.id = +param['id'];
          this.recipeForEdit = this.recipeService.getSingleRecipe(this.id);
        }
      }
    )
  }
  
}
