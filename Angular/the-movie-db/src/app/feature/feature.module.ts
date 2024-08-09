import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature.routing.module';
import { HomeModule } from './home/home.module';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule, 
    HomeModule, 
    MovieModule
  ],
  exports: [
    HomeModule, 
    MovieModule,
  ],
})
export class FeatureModule {}
