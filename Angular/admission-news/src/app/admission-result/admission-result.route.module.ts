import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionResultComponent } from './admission-result.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path:'',component:AdmissionResultComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdmissionResultRouteModule { }
