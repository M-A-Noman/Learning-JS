import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe-list/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(private cloud: DataStorageService,private recipeService:RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.recipeService.getRecipe().length <1)
            return this.cloud.fetchData();
        else return this.recipeService.getRecipe();
    }
}