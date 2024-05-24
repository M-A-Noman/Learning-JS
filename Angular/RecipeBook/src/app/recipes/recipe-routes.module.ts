import { NgModule } from "@angular/core";

import { AuthGuard } from "../Auth/auth.guard";
import { NoRecipeSelectComponent } from "./no-recipe-select/no-recipe-select.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./recipe_resolver.service";
import { RecipesComponent } from "./recipes.component";
import { RouterModule } from "@angular/router";
const routes = [
    {
        path: '', component: RecipesComponent,
        canActivate:[AuthGuard],
        children: [
          { path: '', component: NoRecipeSelectComponent },
          {path:'new',component:RecipeEditComponent},
        {
                path: ':id', component: RecipeDetailsComponent,
                resolve: [RecipeResolverService]
              
          },
          {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolverService]},
        ]
      }
]
@NgModule({
    
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class RecipeRoutesModule{

}