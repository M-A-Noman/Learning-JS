import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-search',
  templateUrl: './static-search.component.html',
  styleUrl: './static-search.component.scss'
})
  export class StaticSearchComponent implements OnInit {
    backgroundImage: string;
  
    constructor() { }
  
    ngOnInit(): void {
      this.fetchRandomBackground();
    }
  
    fetchRandomBackground() {
      // this.http.get<any>('https://api.unsplash.com/photos/random', {
      //   headers: {
      //     Authorization: 'Client-ID YOUR_UNSPLASH_API_KEY'
      //   }
      // }).subscribe(response => {
        this.backgroundImage = 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg';
      // });
    }
  }
