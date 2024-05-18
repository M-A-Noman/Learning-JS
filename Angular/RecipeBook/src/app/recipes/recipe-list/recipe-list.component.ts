import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit,OnDestroy{
  subscriptionOfUpdate: Subscription;
  recipes: Recipe[];
  constructor(private recipeService:RecipeService) {
    
  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
    this.subscriptionOfUpdate=this.recipeService.updateOfRecipe.subscribe(
      (updatedRecipe: Recipe[]) => {
        this.recipes = updatedRecipe;
      }
    )
  }
  ngOnDestroy(): void {
    this.subscriptionOfUpdate.unsubscribe();
  }

 }
