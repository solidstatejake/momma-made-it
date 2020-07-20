import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Recipe }                                              from '../../shared/models/recipe.model';
import { RecipeService }                                       from '../../shared/services/recipe.service';


@Component({
  selector    : 'app-recipes',
  templateUrl : './recipes.component.html',
  styleUrls   : [ './recipes.component.scss' ]
})
@Injectable()
export class RecipesComponent implements OnInit {
  // currentRecipe = new Recipe("duh", 'dont care', 'fu')
  declare currentRecipe;

  constructor( private recipeService : RecipeService ) {}

  ngOnInit() : void {
    this.recipeService.recipeSelected.subscribe(( recipe : Recipe ) => {
      this.currentRecipe = recipe;
    });
  }

  onRecipeSelected( recipe : Recipe ) : void { this.currentRecipe = recipe; }
}
