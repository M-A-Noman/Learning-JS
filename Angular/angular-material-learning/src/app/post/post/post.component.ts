import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as PostAction from '../../store/action';
import { AppStateInterface } from '../../types/app-state.model';
import { errorSelector, isLoadingSelector, postSelector } from '../../store/selectors';
import { PostInterface } from '../../types/post.mode';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  isLoading$: Observable<boolean>;
  posts$:Observable<PostInterface[]>;
  error$:Observable<string|null>;
  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.posts$=this.store.pipe(select(postSelector));
    this.error$=this.store.pipe(select(errorSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(PostAction.getPosts());
  }
}
