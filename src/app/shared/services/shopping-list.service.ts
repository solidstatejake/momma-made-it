import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient }               from '../models/ingredient.model';


@Injectable({
  providedIn : 'root'
})
export class ShoppingListService {
  private ingredients : Ingredient[] = [
    new Ingredient('Avocado', 2),
    new Ingredient('Pepperoni', 1)
  ];
  public ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients() : Ingredient[] { return this.ingredients.slice(); }

  addIngredient( ingredient : Ingredient ) : void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
