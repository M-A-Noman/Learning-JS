import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsRoutingModule } from './movie-details.routing.module';
import { MovieDetailsComponent } from './movie-details.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { detailsReducer } from './state/reducers/index.reducers';
import { EffectsModule } from '@ngrx/effects';
import { detailsEffect } from './state/effects/index.effects';



@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('details',detailsReducer),
    EffectsModule.forFeature(detailsEffect),
    MovieDetailsRoutingModule
  ]
})
export class MovieDetailsModule { }
