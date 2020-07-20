import { Component, OnInit } from '@angular/core';
import { Ingredient }        from '../../shared/models/ingredient.model';


@Component({
  selector    : 'app-shopping-list',
  templateUrl : './shopping-list.component.html',
  styleUrls   : [ './shopping-list.component.scss' ]
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Avocado', 2),
    new Ingredient('Pepperoni', 1)
  ];

  constructor() { }

  ngOnInit() : void {
  }

  onIngredientAdded(ingredient : Ingredient) : void {
    this.ingredients.push(ingredient)
  }

}
