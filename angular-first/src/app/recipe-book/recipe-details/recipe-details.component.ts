import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe-book.model";
import {RecipeService} from "../recipe-book.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  sendIngredientsToShoppingList() {
    this.recipeService.addIngredient(this.recipe.ingredients);
  }

}
