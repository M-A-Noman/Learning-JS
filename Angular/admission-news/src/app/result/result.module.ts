import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResultRouteModule } from './result.route.module';
import { ResultComponent } from './result.component';



@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    RouterModule,
    ResultRouteModule
  ],
  exports:[ResultComponent]
})
export class ResultModule { }
