import { NgModule } from "@angular/core";

import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadSpinnerComponent } from "./load-spinner/load-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DropdownDirective,
        LoadSpinnerComponent,
        AlertComponent
    ],
    imports: [CommonModule],
    exports: [
        DropdownDirective,
        LoadSpinnerComponent,
        AlertComponent,
        CommonModule
    ]
})
export class SharedModule{

}