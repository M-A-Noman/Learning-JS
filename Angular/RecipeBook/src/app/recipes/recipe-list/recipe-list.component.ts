import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../Auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit,OnDestroy{
  subscriptionOfUpdate: Subscription;
  userSubscription: Subscription;
  recipes: Recipe[];
  constructor(private recipeService:RecipeService,private authService:AuthService,private cloudService:DataStorageService) {
    
  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
    this.subscriptionOfUpdate=this.recipeService.updateOfRecipe.subscribe(
      (updatedRecipe: Recipe[]) => {
        this.recipes = updatedRecipe;
      }
    )
    this.userSubscription = this.authService.user.subscribe(
      (user) => {
        if (user.Token) {
          this.cloudService.fetchData().subscribe();
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.subscriptionOfUpdate.unsubscribe();
    this.userSubscription.unsubscribe();
  }

 }
