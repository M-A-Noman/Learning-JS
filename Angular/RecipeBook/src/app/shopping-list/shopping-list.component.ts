import { Component } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrl:'./shopping-list.component.css'
}) 
export class shoppingListComponent{
    ingredients: Ingredients[] = [
        new Ingredients('Apple', 5),
        new Ingredients('Tomatoes',10)
    ];
    constructor() {
        
    }
}