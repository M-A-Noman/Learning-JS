import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentInstructionComponent } from './payment-instruction.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path:'',component:PaymentInstructionComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentInstructionRouteModule { }
