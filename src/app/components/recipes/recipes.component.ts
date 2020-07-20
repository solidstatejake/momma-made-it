import { Component, OnInit, Output } from '@angular/core';
import { Recipe }                    from '../../shared/models/recipe.model';


@Component({
  selector    : 'app-recipes',
  templateUrl : './recipes.component.html',
  styleUrls   : [ './recipes.component.scss' ]
})
export class RecipesComponent implements OnInit {
  currentRecipe : Recipe;

  constructor() { }

  ngOnInit() : void {
  }

  onRecipeItemSelected( recipe : Recipe ) : void {
    this.currentRecipe = recipe;
  }
}
