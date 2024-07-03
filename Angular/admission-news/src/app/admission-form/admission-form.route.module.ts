import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionFormComponent } from './admission-form.component';
import { RouterModule } from '@angular/router';

const routes= [
  {path:'',component:AdmissionFormComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdmissionFormRoutingModule { }
