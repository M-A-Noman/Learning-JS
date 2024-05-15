import { Subject } from "rxjs";

import { Recipe } from "./recipe-list/recipe.model";
import { Ingredients } from "../shared/ingredient.model";

export class RecipeService{
    // selectedRecipe = new Subject<{ id:number,recipe:Recipe }>();
   private recipes: Recipe[] = [
       new Recipe(
           'Shrimp Biryani',
           'A spoonful of this biryani is enough to mesmerise everyone.',
           'https://images.slurrp.com/prodrich_article/yrs8k6juat.webp?impolicy=slurrp-20210601&width=880&height=500',
           [
               new Ingredients('Rice', 4),
               new Ingredients('Shrimp', 1),
               new Ingredients('Masala',1)
           ]
       ),
       new Recipe(
           'Chicken Keema',
           ' Chicken Keema is prepared by using minced chicken that is perfectly seasoned with some exotic spices and green peas.',
           'https://images.slurrp.com/prodrich_article/boj6gni83zv.webp?impolicy=slurrp-20210601&width=880&height=500',
           [
               new Ingredients('Chicken', 4),
               new Ingredients('Masala', 1)
           ]
       ),
       new Recipe(
           'Hariyali Chicken Tikka',
           'Hariyali chicken tikka has a striking green colour and a refreshing flavour of a lot of fresh ingredients such as mint leaves, coriander, leaves, and green chillies.',
           'https://images.slurrp.com/prodrich_article/5n2kg25q4fr.webp?impolicy=slurrp-20210601&width=880&height=500',
           [
               new Ingredients('Chicken', 4),
               new Ingredients('Masala', 1)
           ]
       )
    ];
    getRecipe() {
        return this.recipes.slice();
    }
    getSingleRecipe(id:number) {
        return this.recipes[id];
    }
}