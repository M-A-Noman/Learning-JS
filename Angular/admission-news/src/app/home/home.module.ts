import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRouteModule } from './home.route.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRouteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
