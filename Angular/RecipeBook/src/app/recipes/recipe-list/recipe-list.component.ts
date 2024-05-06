import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is for test purpose', 'https://www.simplyrecipes.com/thmb/1EVwzBp5s5MvRDuI9wXrnYtrPJY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Baklava-LEAD-4-a9d125c8d66547ef9f92c6564a5d5241.jpg'),
    new Recipe('A test recipe 2','This is for test purpose','https://www.simplyrecipes.com/thmb/1EVwzBp5s5MvRDuI9wXrnYtrPJY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Baklava-LEAD-4-a9d125c8d66547ef9f92c6564a5d5241.jpg')
  ];
  constructor() {
    
  }
  getName(item: Recipe) {
    return item.name;
  }
  getDescription(item: Recipe) {
    return item.description;
  }
  getImage(item: Recipe) {
    return item.imagePath;
  }
}
