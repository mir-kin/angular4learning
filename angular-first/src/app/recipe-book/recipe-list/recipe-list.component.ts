import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    @Output() currentRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      new Recipe('Test Recipe', 'Test Description of Recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7E54gwax5mhsoJ7O--dc2oJ9v-mfDKvfFA3gHgicxmHKKaiVkQ'),
      new Recipe('Test Recipe 2', 'Test Descrition of Recipe 2', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      this.currentRecipe.emit(recipe);
  }

}
