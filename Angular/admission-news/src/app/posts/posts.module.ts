import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsRouteModule } from './posts.route.module';
import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [ PostsComponent, PostDetailsComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule,
    PostsRouteModule
  ],
  exports:[PostsComponent,PostDetailsComponent,PostComponent]
})
export class PostsModule { }
