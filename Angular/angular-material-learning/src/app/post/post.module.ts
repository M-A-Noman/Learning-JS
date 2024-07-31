import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '../store/effects';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('posts',reducers),
    EffectsModule.forFeature([PostEffects]),
  ],
  exports:[PostComponent]
})
export class PostModule { }
