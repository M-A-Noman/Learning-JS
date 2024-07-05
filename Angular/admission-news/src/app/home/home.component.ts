import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Post } from '../posts/post.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  posts: Post[];
  readMore: boolean= false;

  constructor(private dataService: DataService, public sanitizer:DomSanitizer) { }
  ngOnInit(): void {
    this.dataService.getAllPosts().subscribe((res) => {
      this.posts = res.length?res:undefined;
    })
  }
  
  onReadMore() {
    this.readMore=!this.readMore
  }

}
