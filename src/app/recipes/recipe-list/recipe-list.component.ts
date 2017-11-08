import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // The only thing that will be stored in  recipes is an array of Recipe
  recipes: Recipe[] = [
    new Recipe(
      'Sushi',
      'Delicious rolls made of rice and fish',
      'https://halfoff.adspayusa.com/wp-content/uploads/2017/04/sushi_and_sashimi_for_two.0.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
