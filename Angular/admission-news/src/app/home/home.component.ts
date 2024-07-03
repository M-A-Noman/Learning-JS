import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  postForm = new FormGroup({
    "title": new FormControl(null, [Validators.required]),
    "lastUpdate": new FormControl(null, [Validators.required]),
    "postedBy": new FormControl(null, [Validators.required]),
    "postDetails":new FormControl(null,[Validators.required])
  })

  constructor(private dataService:DataService){}
  onFormSubmit() {
    console.log(this.postForm['value']);
    let post: Post = {} as Post;
    post.title = this.postForm['value'].title;
    post.lastUpdate = this.postForm['value'].lastUpdate;
    post.postDetails = this.postForm['value'].postDetails;
    post.postedBy = this.postForm['value'].postedBy;
    // console.log(post);
    this.dataService.createPosts(post)
  }

}
