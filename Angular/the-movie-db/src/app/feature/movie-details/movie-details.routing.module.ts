import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { RouterModule } from '@angular/router';
import { DetailsResolver } from '../../core/resolvers/details.resolver';

const routes=[
  {
    path:'',component:MovieDetailsComponent,
    resolve:{data:DetailsResolver}
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MovieDetailsRoutingModule { }
