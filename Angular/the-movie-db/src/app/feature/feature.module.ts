import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature.routing.module';
import { HomeModule } from './home/home.module';
import { ListModule } from './List/list.module';
import { DetailsModule } from './details/details.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HomeModule,
    ListModule,
    DetailsModule,
  ],
  exports: [HomeModule, ListModule],
})
export class FeatureModule {}
