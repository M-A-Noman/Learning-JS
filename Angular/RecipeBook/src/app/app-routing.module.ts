import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { shoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { NoRecipeSelectComponent } from './recipes/no-recipe-select/no-recipe-select.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipes', pathMatch:'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: NoRecipeSelectComponent },
      {path:':id',component:RecipeDetailsComponent}
    ]
  },
  {path:'shopping-list',component:shoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
