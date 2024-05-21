import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { shoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { NoRecipeSelectComponent } from './recipes/no-recipe-select/no-recipe-select.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe_resolver.service';
import { AuthComponent } from './Auth/auth.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipes', pathMatch:'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: NoRecipeSelectComponent },
      {path:'new',component:RecipeEditComponent},
      { path: ':id', component: RecipeDetailsComponent ,resolve:[RecipeResolverService]},
      {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolverService]},
    ]
  },
  { path: 'shopping-list', component: shoppingListComponent },
  {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
