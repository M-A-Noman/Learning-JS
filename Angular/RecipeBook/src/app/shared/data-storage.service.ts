import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map,tap } from "rxjs";

import { Recipe } from "../recipes/recipe-list/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService) { }
    

    // postData() { }
    // fetchData(){}



    postData() {
        const currentRecipes = this.recipeService.getRecipe();
        this.http.put('https://recipe-book-7905b-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', currentRecipes).subscribe(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error.message);
            }
        )
    }
    fetchData() {
        return this.http.get<Recipe[]>('https://recipe-book-7905b-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json')
            .pipe(map((recipes) => {
                return recipes.map((recipe) => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
                })
            })
            ,
            tap((recipes:Recipe[]) => {
                this.recipeService.setRecipe(recipes);
            })
        )
    }

    // fetchData() {
    //     return this.http.get<Recipe[]>('https://recipe-book-7905b-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json').subscribe(
    //         (response) => {
    //             console.log(response);
    //         }
    //     )
            
        //     .pipe(map(
        //     (response) => {
        //       const recipeArray :Recipe[]= [];
        //       for (const key in response) {
        //         if (response.hasOwnProperty(key)) {
        //             for (const responseKey in response[key]) {
        //                 recipeArray.push(response[key][responseKey]);
        //           }
        //         }
        //       }
        //       return recipeArray;
        //     })
        //   ) ;
    // }
    // updateData(recipe: Recipe) {
    //     this.http.put('https://recipe-book-7905b-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', recipe).subscribe(
    //         (response) => {
    //             console.log(response);
    //         },
    //         (error) => {
    //             console.log(error.message);
    //         }
    //     )
    // }
}