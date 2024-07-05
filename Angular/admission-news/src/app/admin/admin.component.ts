import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../posts/post.model';
import { DataService } from '../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[DatePipe]
})
export class AdminComponent {
  postForm = new FormGroup({
    "title": new FormControl(null, [Validators.required]),
    "postDetails": new FormControl(null, [Validators.required]),
    "thumbnail": new FormControl(null),
    "pdf": new FormControl(null)
  })
  constructor(private dataService: DataService, private datePipe:DatePipe) { }
  ngOnInit(): void {
  }
  onFormSubmit() {
    // console.log(this.postForm['value']);
    if (this.postForm.valid) {
      let post: Post = {} as Post;
      let date = new Date();
      let currentDate = this.datePipe.transform(date, 'dd-MM-yyyy');
      // console.log(currentDate);
      post.title = this.postForm['value'].title;
      post.lastUpdate = currentDate;
      post.postDetails = this.postForm['value'].postDetails;
      post.postedBy = 'admin';
      post.thumbnail = this.postForm['value'].thumbnail;
      post.pdf = this.postForm['value'].pdf;
      console.log(post);
      this.dataService.createPosts(post)
      this.postForm.reset();
    }
  }

}
