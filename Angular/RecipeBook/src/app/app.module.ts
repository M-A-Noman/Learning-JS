import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// import { shoppingListComponent } from './shopping-list/shopping-list.component';

// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { NoRecipeSelectComponent } from './recipes/no-recipe-select/no-recipe-select.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeService } from './recipes/recipe.service';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

// import { ShoppingService } from './shopping-list/shopping.service';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

// import { DropdownDirective } from './shared/dropdown.directive';
// import { LoadSpinnerComponent } from './shared/load-spinner/load-spinner.component';
// import { AlertComponent } from './shared/alert/alert.component';

// import { AuthComponent } from './Auth/auth.component';

import { AuthInterceptorService } from './Auth/auth-interceptor.service';

// import { RecipeModule } from './recipes/recipe.module';
// import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './Auth/auth.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // RecipeModule,
    // ShoppingModule,
    AuthModule,

    SharedModule,
  ],
  providers: [
    // ShoppingService, RecipeService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
