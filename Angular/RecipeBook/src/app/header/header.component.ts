import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
  // @Output() featureType = new EventEmitter<string>();
  isLoggedIn = false;
  userSubscription:Subscription
  constructor(private router: ActivatedRoute, private cloud: DataStorageService,private authService:AuthService) {

  }
  

  ngOnInit(): void {
    // this.cloud.fetchData().subscribe()
    this.userSubscription=this.authService.user.subscribe(
      (user) => {
        this.isLoggedIn = !!user;
      }
    )
    // this.isLoggedIn = !this.authService.user?false:true;
    // console.log(this.authService.user);
  }
  onSaveData() {
    this.cloud.postData();
  }
  onGetData() {
    this.cloud.fetchData().subscribe();
  }
  // onClick(feature:string) {
  //   this.router.params.subscribe(
  //     (params: Params) => {

  //     }
  //   )
  // }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
