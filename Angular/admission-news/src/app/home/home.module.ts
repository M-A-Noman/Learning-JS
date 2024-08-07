import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRouteModule } from './home.route.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRouteModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
