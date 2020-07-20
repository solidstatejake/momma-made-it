import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe }                           from '../models/recipe.model';


@Injectable({
  providedIn : 'root'
})

export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe(
      'Chocolate Chip Cookies',
      'Sink your teeth in to these mouth-watering morsels. This recipe has been in my family for generations. They\'re always a hit!',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2Ftk1AvdKvnu_pJ8mevpJ6NSN2xw4%3D%2F4590x3060%2Ffilters%3Afill(auto%2C1)%2Fchocolatechipcookies-90198407-571231025f9b588cc2c1596f.jpg&f=1&nofb=1',
      [
        { name : 'Flour', amount : 2 },
        { name : 'Butter', amount : 1 },
        { name : 'Shortening', amount : 1 },
        { name : 'Brown Sugar', amount : 1 },
        { name : 'White Sugar', amount : 1 },
        { name : 'Vanilla', amount : 3 }
      ]
    ),
    new Recipe(
      'Scrambled Eggs',
      'Breakfast like you\'ve never before had it. The corn starch and half-and-half added to these eggs will forever change what you thought breakfast could be.',
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwomansvibe.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fscrambled-eggs.jpg&f=1&nofb=1',
      [
        { name : 'Egg', amount : 3 },
        { name : 'Half-and-Half', amount : 2 },
        { name : 'Corn Starch', amount : 1 },
        { name : 'Salt', amount : 1 },
        { name : 'Pepper', amount : 1 }
      ]
    )
  ];
  public recipeSelected      = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() : Recipe[] {
    return this.recipes.slice();
  }

  onRecipeSelected( recipe : Recipe ) {
    this.recipeSelected.emit(recipe);
  }

}
