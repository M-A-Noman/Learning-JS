import { NgModule } from "@angular/core";

import { shoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";

const routes=[{ path: '', component: shoppingListComponent },]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ShoppingRoutesModule{ }