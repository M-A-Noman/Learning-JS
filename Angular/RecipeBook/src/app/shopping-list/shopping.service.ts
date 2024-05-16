import { Subject } from 'rxjs';

import { Ingredients } from '../shared/ingredient.model';

export class ShoppingService {
  ingredientsChange = new Subject<Ingredients[]>();
  onEditModeStart = new Subject<number>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoes', 10),
  ];
  getIngredients() {
    // return this.ingredients;//could be a solution
    return this.ingredients.slice();
  }
    onAddClicked(items: Ingredients,exist=false) {
        let i: number;
        for (i = 0; i < this.ingredients.length; i++){
            if (this.ingredients[i].name===items.name) {
                exist = true;
                console.log("item exist");
                break
            }
        }
    if (exist) {
        this.ingredients[i].amount += items.amount;
        // console.log("Item Exists",items.name);
    } else
      {
          console.log(items);
      this.ingredients.push(items);
    }
    this.ingredientsChange.next(this.ingredients.slice());
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
}
