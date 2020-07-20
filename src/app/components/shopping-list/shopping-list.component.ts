import { Component, OnInit }   from '@angular/core';
import { Ingredient }          from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';


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

  constructor( private shoppingListService : ShoppingListService ) {}

  ngOnInit() : void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      ( ingredients : Ingredient[] ) => {
      this.ingredients = ingredients;
    });
  }


}
