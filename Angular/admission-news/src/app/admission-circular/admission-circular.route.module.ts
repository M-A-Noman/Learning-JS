import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdmissionCircularComponent } from './admission-circular.component';

const routes = [
  {
    path:'',component:AdmissionCircularComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdmissionCircularRouteModule { }
