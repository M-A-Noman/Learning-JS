import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        HttpClientModule,
        SharedModule,
        FormsModule,
        AuthRoutingModule
    ],
    exports:[]

})
export class AuthModule{

}