import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentInstructionComponent } from './payment-instruction.component';
import { RouterModule } from '@angular/router';
import { PaymentInstructionRouteModule } from './payment-instruction.route.module';



@NgModule({
  declarations: [PaymentInstructionComponent],
  imports: [
    CommonModule,
    RouterModule,
    PaymentInstructionRouteModule
  ],
  exports:[PaymentInstructionComponent]
})
export class PaymentInstructionModule { }
