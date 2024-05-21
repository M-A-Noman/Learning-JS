import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

import { Recipe } from "./recipe-list/recipe.model";
import { Ingredients } from "../shared/ingredient.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable()
export class RecipeService{
    // selectedRecipe = new Subject<{ id:number,recipe:Recipe }>();
    updateOfRecipe = new Subject<Recipe[]>();
    
    constructor(){}
    private recipes: Recipe[] = [];
    //     [
    //    new Recipe(
    //        'Shrimp Biryani',
    //        'A spoonful of this biryani is enough to mesmerise everyone.',
    //        'https://images.slurrp.com/prodrich_article/yrs8k6juat.webp?impolicy=slurrp-20210601&width=880&height=500',
    //        [
    //            new Ingredients('Rice', 4),
    //            new Ingredients('Shrimp', 1),
    //            new Ingredients('Masala',1)
    //        ]
    //    ),
    //    new Recipe(
    //        'Chicken Keema',
    //        ' Chicken Keema is prepared by using minced chicken that is perfectly seasoned with some exotic spices and green peas.',
    //        'https://images.slurrp.com/prodrich_article/boj6gni83zv.webp?impolicy=slurrp-20210601&width=880&height=500',
    //        [
    //            new Ingredients('Chicken', 4),
    //            new Ingredients('Masala', 1)
    //        ]
    //    ),
    //    new Recipe(
    //        'Hariyali Chicken Tikka',
    //        'Hariyali chicken tikka has a striking green colour and a refreshing flavour of a lot of fresh ingredients such as mint leaves, coriander, leaves, and green chillies.',
    //        'https://images.slurrp.com/prodrich_article/5n2kg25q4fr.webp?impolicy=slurrp-20210601&width=880&height=500',
    //        [
    //            new Ingredients('Chicken', 4),
    //            new Ingredients('Masala', 1)
    //        ]
    //    )
    // ];
    setRecipe(recipes: Recipe[]) {
        this.recipes = recipes;
        this.updateOfRecipe.next(this.recipes.slice());
    }

    getRecipe() {
        return this.recipes.slice();
    }

    getSingleRecipe(id:number) {
        return this.recipes[id];
    }

    onUpdateRecipe(index: number, recipe:Recipe) {
        // this.recipes[index].name = name;
        // this.recipes[index].imagePath = imagePath;
        // this.recipes[index].description = description;
        // console.log(typeof(recipe));
        // this.recipes[index].name = recipe.name;
        // this.recipes[index].description = recipe.description;
        // this.recipes[index].imagePath = recipe.imagePath;
        // this.recipes[index].ingredients = recipe.ingredients;
        this.recipes[index] = recipe;
        this.updateOfRecipe.next(this.recipes.slice());   
    }

    onCreateRecipe(recipe:Recipe) {
        // let recipe: Recipe = new Recipe(name,description, imagePath, []);
        // this.recipes.push(recipe);
        // this.updateOfRecipe.next(this.recipes.slice());
        this.recipes.push(recipe);
        this.updateOfRecipe.next(this.recipes.slice());

    }

    onDelete(index: number) {
        this.recipes.splice(index, 1);
        this.updateOfRecipe.next(this.recipes.slice());
    }

    // onSaveDataToCloud() { 
    //     this.cloud.postData(this.recipes);
    // }
    // onFetchDataFromCloud() {
    //     this.cloud.fetchData()

    //     //     .subscribe(
    //     //     (response) => {
    //     //         this.recipes = response;
    //     //         console.log(response);
    //     //         // for (const key in response) {
    //     //         //     console.log(key, ' value ', response[key]);
    //     //         // }
    //     //     },
    //     //     (error) => {
    //     //         console.log(error.message);
    //     //     }
    //     // );
    //     this.updateOfRecipe.next(this.recipes.slice());
    // }
}