import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list.component';
import { StoreModule } from '@ngrx/store';
import { listReducers } from './state/reducers/index.reducers';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    StoreModule.forFeature('List',listReducers),
    EffectsModule.forFeature([]),
  ],
  exports:[
    ListComponent,
    
  ]
})
export class ListModule { }
