import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Ingredients } from "../shared/ingredient.model";
import { ShoppingService } from "./shopping.service";
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
}) 
export class shoppingListComponent implements OnInit,OnDestroy{
    ingredients: Ingredients[]
    private ingredientsChangeSubscription: Subscription
    constructor(private shoppingService:ShoppingService) {
    }
    ngOnInit(): void {
        this.ingredients = this.shoppingService.getIngredients();
       this.ingredientsChangeSubscription= this.shoppingService.ingredientsChange.subscribe(
            (ingredient:Ingredients[]) => {
                this.ingredients = ingredient;
            }
        )
    }
    ngOnDestroy(): void {
        this.ingredientsChangeSubscription.unsubscribe();
    }
    // onAddClicked(items: Ingredients) {
    //     this.ingredients.push(items);
    // }
    onEditMode(index:number) {
        this.shoppingService.onEditModeStart.next(index);
    }
    
}