import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { NoRecipeSelectComponent } from "./no-recipe-select/no-recipe-select.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeRoutesModule } from "./recipe-routes.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailsComponent,
        RecipeListComponent,
        NoRecipeSelectComponent,
        RecipeEditComponent,
        RecipeItemComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        RecipeRoutesModule,
        SharedModule
    ],
   
})
export class RecipeModule{ }