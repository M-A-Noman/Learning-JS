import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../post/post.service';
import * as PostAction from '../store/action';
import { catchError, map, mergeMap, of } from 'rxjs';
@Injectable()
export class PostEffects {
  constructor(private action$: Actions, private postService: PostService) {}

  getPosts$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostAction.getPosts),
      mergeMap(() => {
        return this.postService.getPosts().pipe(
          map((posts) => PostAction.getPostsSuccess({ posts })),
          catchError((error) =>
            of(PostAction.getPostsFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
