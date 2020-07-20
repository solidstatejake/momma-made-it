import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe }                                  from '../../../shared/models/recipe.model';
import { RecipeService }                           from '../../../shared/services/recipe.service';


@Component({
  selector    : 'app-recipe-list',
  templateUrl : './recipe-list.component.html',
  styleUrls   : [ './recipe-list.component.scss' ]
})

export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  recipes : Recipe[];

  constructor(private recipeService : RecipeService) {}

  ngOnInit() : void {
    this.recipes = this.recipeService.getRecipes();
  }

}
