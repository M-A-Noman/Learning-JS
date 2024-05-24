import { Component, OnInit } from '@angular/core';
import { AuthService } from './Auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // loadedFeature = 'recipe';
  constructor(private authService:AuthService,private cloudService:DataStorageService) {
    
  }
  ngOnInit(): void {
    this.authService.autoLogin()
  }
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
