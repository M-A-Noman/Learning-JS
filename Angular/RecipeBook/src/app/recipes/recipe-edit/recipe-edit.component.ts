import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Ingredients } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  recipeForEdit: Recipe;
  id: number;
  isNew = false;
  recipeForm: FormGroup;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      // console.log(param['new']);
      if (param['id'] == undefined) {
        this.isNew = true;
      } else {
        this.id = +param['id'];
        this.recipeForEdit = this.recipeService.getSingleRecipe(this.id);
        this.initForm();
      }
    });
  }
  private initForm() {
    let recipe: Recipe;
    let recipeIngredient: FormArray = new FormArray([]);
    if (!this.isNew) {
      recipe = this.recipeForEdit;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredient.push(
            new FormGroup( {
              'ingredientName': new FormControl(ingredient.name),
              'ingredientAmount': new FormControl(ingredient.amount)
            })
          )
        }
      }  
    } else {
      recipe = new Recipe('', '', '', []);
        recipeIngredient.push(
          new FormGroup( {
            'ingredientName': new FormControl('gtf'),
            'ingredientAmount': new FormControl(0)
          })
        )
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name),
      'imageURL': new FormControl(recipe.imagePath),
      'description': new FormControl(recipe.description),
      'ingredients': recipeIngredient,
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'ingredientName':new FormControl(),
        'ingredientAmount':new FormControl()
      })
    )
  }

  getIngredient() {
    // let currentIngredient: Ingredients[];
    // if (!this.isNew) {
    //   currentIngredient = this.recipeForEdit.ingredients;
    // } else {
    //    currentIngredient= [{ name: '', amount: 0 }];
    // }
    // return currentIngredient;
    // console.log((this.recipeForm.get('ingredients') as FormArray).controls)
    // return (this.recipeForm.get('ingredients') as FormArray).controls;
    // console.log((this.recipeForm.get('ingredients').value ))
    // let ingredients: Ingredients[] = this.recipeForm.get('ingredients').value;
    // return ingredients;
    // return (this.recipeForm.get('ingredients') as FormArray).controls;
    // console.log(<FormArray>this.recipeForm.get('ingredients').value)
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  // getControl() {

  // }

  onSave() {
    let name: string = this.recipeForm.get('name').value;
    let imagePath: string = this.recipeForm.get('imageURL').value;
    let description: string = this.recipeForm.get('description').value;
    if (!this.isNew) {
      this.recipeService.onUpdateRecipe(this.id, name, imagePath, description);
    } else {
      this.recipeService.onCreateRecipe(name, imagePath, description);
    }
  }
}
