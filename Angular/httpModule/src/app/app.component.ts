import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient,private postService:PostService) {}

  ngOnInit() {
    this.postService.error.subscribe(
      (error) => {

        this.error = error;
      }
    )
    this.fetchData();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    this.postService.createPosts(postData.title, postData.content);
    if (this.error === null) {
      setTimeout(() => {
        this.fetchData();
      }, 500)
    } else {
      this.loadedPosts = [];
    }
    
  }

  onFetchPosts() {
    // Send Http request
    this.fetchData();
  }

  private fetchData() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((res) => {
      this.isFetching = false;
      this.loadedPosts = res;
    }, (error) => {
      this.isFetching = false;
      this.error = error.message;
      this.loadedPosts=[]
    })
  }

  onClearPosts() {
    // Send Http request
    this.postService.onDelete().subscribe(
      () => {
        this.loadedPosts = [];
      }
    )
  }
 
}
