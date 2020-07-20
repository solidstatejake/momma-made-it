import { Injectable } from '@angular/core';
import { Recipe }     from '../models/recipe.model';


@Injectable({
  providedIn : 'root'
})
export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Delicious tests. Mmmm...',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thestar.com%2Fcontent%2Fdam%2Fthestar%2Flife%2Ffood_wine%2F2014%2F04%2F04%2Fkavkaz_a_welcome_taste_of_azerbaijan_in_north_york%2Flavangi_walnutstuffed_cornish_hen_at_kavkaz.jpg&f=1&nofb=1'
    ),
    new Recipe(
      'A Second Test Recipe',
      'These tests are sooooo good!',
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1333558%2Fimages%2Fo-BEST-FOOD-BLOGGERS-facebook.jpg&f=1&nofb=1'
    )
  ];

  getRecipes() : Recipe[] {
    return this.recipes.slice();
  }

  constructor() { }
}
