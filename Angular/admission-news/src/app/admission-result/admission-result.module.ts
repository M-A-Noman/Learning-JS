import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionResultComponent } from './admission-result.component';
import { RouterModule } from '@angular/router';
import { AdmissionResultRouteModule } from './admission-result.route.module';



@NgModule({
  declarations: [
    AdmissionResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdmissionResultRouteModule  
  ],
  exports:[AdmissionResultComponent]
})
export class AdmissionResultModule { }
