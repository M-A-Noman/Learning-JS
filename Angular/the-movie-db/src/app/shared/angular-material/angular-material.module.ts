import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    
  ],
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports:[
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class AngularMaterialModule { }
