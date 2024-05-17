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
  onAddClicked(newItems: Ingredients,oldItems:Ingredients) {
    let exist = false;
        let i: number;
        for (i = 0; i < this.ingredients.length; i++){
            if (this.ingredients[i].name===newItems.name) {
                exist = true;
                console.log("item exist");
                break
            }
        }
    if (exist) {
      this.ingredients[i].amount += newItems.amount;
     
     
        // console.log("Item Exists",items.name);
    } else
      {
          // console.log(newItems);
      this.ingredients.push(newItems);
    }
    if (newItems.name !== oldItems.name) {
      // for (i = 0; i < this.ingredients.length; i++){
      //   if (this.ingredients[i].name === oldItems.name) break;
      // }
      this.onDeleteClicked(this.ingredients.indexOf(oldItems));
      // console.log(newItems);
      // console.log(oldItems);
      
    }
    this.ingredientsChange.next(this.ingredients.slice());
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  onDeleteClicked(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
