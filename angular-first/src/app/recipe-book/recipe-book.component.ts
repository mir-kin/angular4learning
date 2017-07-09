import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe-book.model";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  recipeWasSelected(event) {
    this.selectedRecipe = event;
  }

}
