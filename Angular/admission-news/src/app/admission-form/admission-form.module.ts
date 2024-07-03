import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdmissionFormRoutingModule } from './admission-form.route.module';
import { AdmissionFormComponent } from './admission-form.component';



@NgModule({
  declarations: [
    AdmissionFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdmissionFormRoutingModule
  ],
  exports:[AdmissionFormComponent]
})
export class AdmissionFormModule { }
