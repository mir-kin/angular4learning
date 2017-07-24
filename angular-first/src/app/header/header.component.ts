import {Component, OnInit} from '@angular/core';
import { Response } from '@angular/http'
import {ShoppingService} from "../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe-book/recipe-book.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.recipeService.sendRecipes();
    this.shoppingService.sendIngredients();
  }

  onGetData() {
    this.recipeService.setRecipes();
    this.shoppingService.setIngredients();
  }

}
