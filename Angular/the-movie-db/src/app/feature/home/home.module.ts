import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StaticSearchComponent } from './static-search/static-search.component';
import { HomeComponent } from './home.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    StaticSearchComponent,
    HomeComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [HomeComponent,StaticSearchComponent,ContainerComponent]
})
export class HomeModule { }
