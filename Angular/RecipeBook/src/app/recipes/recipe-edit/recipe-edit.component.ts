import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private route: ActivatedRoute,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      // console.log(param['new']);
      if (param['id'] === undefined) {
        this.isNew = true;
      } else {
        this.id = +param['id'];
        this.recipeForEdit = this.recipeService.getSingleRecipe(this.id);
        
      }
      this.initForm();
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
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
               Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }  
    } else {
      recipe = new Recipe('', '', '', []);
        
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name,Validators.required),
      'description': new FormControl(recipe.description,Validators.required),
      'imagePath': new FormControl(recipe.imagePath,Validators.required),
      'ingredients': recipeIngredient,
    });
  }

  onAddIngredient() {
    console.log(typeof(<FormArray>this.recipeForm.get('ingredients')));
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
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

  onSubmit() {
    let name: string = this.recipeForm.value['name'];
    let imagePath: string = this.recipeForm.value['imagePath'];
    let description: string = this.recipeForm.value['description'];
    let ingredients: Ingredients[]=this.recipeForm.value['ingredients'];
    // if (this.recipeForm['ingredients'] !== null) {
    //   ingredients= this.recipeForm.get('ingredients').value;
    // } else {
    //   ingredients = [{ name: 'no ingredients', amount: 0 }];
    // }
    
    let newRecipe: Recipe = new Recipe(name, description, imagePath, ingredients);
    if (!this.isNew) {
      this.recipeService.onUpdateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.onCreateRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  onDeleteIngredients(index:number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
