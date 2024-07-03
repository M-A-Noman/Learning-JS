import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionCircularComponent } from './admission-circular.component';
import { RouterModule } from '@angular/router';
import { AdmissionCircularRouteModule } from './admission-circular.route.module';



@NgModule({
  declarations: [AdmissionCircularComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdmissionCircularRouteModule
  ],
  exports:[AdmissionCircularComponent]
})
export class AdmissionCircularModule { }
