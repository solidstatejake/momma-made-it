import { Component, Input, OnInit } from '@angular/core';
import { Recipe }                   from '../../../../shared/models/recipe.model';
import { RecipeService }            from '../../../../shared/services/recipe.service';


@Component({
  selector    : 'app-recipe-item',
  templateUrl : './recipe-item.component.html',
  styleUrls   : [ './recipe-item.component.scss' ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() : void {
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeService.onRecipeSelected(this.recipe)
  }

}
