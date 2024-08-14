import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature.routing.module';
import { HomeModule } from './home/home.module';
import { MovieModule } from './movie/movie.module';
import { DetailsModule } from './details/details.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HomeModule,
    MovieModule,
    DetailsModule,
  ],
  exports: [HomeModule, MovieModule],
})
export class FeatureModule {}
