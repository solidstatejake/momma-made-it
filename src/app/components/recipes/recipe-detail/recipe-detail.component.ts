import { Component, Input, OnInit, EventEmitter, Injectable } from '@angular/core';
import { RecipeService }                                      from '../../../shared/services/recipe.service';
import { Recipe }                                 from '../../../shared/models/recipe.model';


@Component({
  selector    : 'app-recipe-detail',
  templateUrl : './recipe-detail.component.html',
  styleUrls   : [ './recipe-detail.component.scss' ]
})
@Injectable()
export class RecipeDetailComponent implements OnInit {
  @Input() recipe : Recipe;

  constructor( ) {}

  ngOnInit() : void {}

}
