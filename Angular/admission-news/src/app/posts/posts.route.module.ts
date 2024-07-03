import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';

const routes = [
  { path: '', component: PostsComponent },
  {
    path:'post',component:PostComponent
  },
  {
    path:'details',component:PostDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PostsRouteModule { }
