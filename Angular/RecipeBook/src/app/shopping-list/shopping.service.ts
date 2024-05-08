import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingService{
    ingredientsChange = new EventEmitter<Ingredients[]>()
   private ingredients: Ingredients[] = [
        new Ingredients('Apple', 5),
        new Ingredients('Tomatoes',10)
    ];
    getIngredients() {
        // return this.ingredients;//could be a solution
        return this.ingredients.slice();
    }
    onAddClicked(items: Ingredients) {
        this.ingredients.push(items);
        this.ingredientsChange.emit(this.ingredients.slice());
    }
}