import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RattingComponent } from './ratting/ratting.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    RattingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[RattingComponent]
})
export class SharedModule { }
