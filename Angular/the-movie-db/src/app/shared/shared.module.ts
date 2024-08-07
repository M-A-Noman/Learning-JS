import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CardComponent } from './component/card/card.component';
import { RattingComponent } from './component/ratting/ratting.component';



@NgModule({
  declarations: [
    CardComponent,
    RattingComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    CardComponent,
    RattingComponent,
    AngularMaterialModule
  ]
})
export class SharedModule { }
