import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingService } from "./shopping.service";
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
}) 
export class shoppingListComponent implements OnInit{
    ingredients: Ingredients[]
    constructor(private shoppingService:ShoppingService) {
    }
    ngOnInit(): void {
        this.ingredients = this.shoppingService.getIngredients();
        this.shoppingService.ingredientsChange.subscribe(
            (ingredient:Ingredients[]) => {
                this.ingredients = ingredient;
            }
        )
    }
    // onAddClicked(items: Ingredients) {
    //     this.ingredients.push(items);
    // }
}