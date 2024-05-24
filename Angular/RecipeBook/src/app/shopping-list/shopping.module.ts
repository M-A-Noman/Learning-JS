import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { shoppingListComponent } from "./shopping-list.component";
import { ShoppingRoutesModule } from "./shopping-routes.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        shoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        RouterModule,
        FormsModule,
        ShoppingRoutesModule,
        SharedModule
    ],
    exports:[]
})
export class ShoppingModule{

}