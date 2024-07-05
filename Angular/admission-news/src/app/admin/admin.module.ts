import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouteModule } from './admin.route.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    AdminRouteModule,
  ],
  exports:[AdminComponent]
})
export class AdminModule { }
