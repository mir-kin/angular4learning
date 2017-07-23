import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {RecipeService} from "../recipe-book/recipe-book.service";
import {Recipe} from "../recipe-book/recipe-book.model";
import 'rxjs';
import {ShoppingService} from "../shopping-list/shopping-list.service";

@Injectable()
export class ServerService {

  constructor(private http: Http, private recipeService: RecipeService, private shoppingService: ShoppingService) { }

  storeRecipes() {
    return this.http.put('https://angular-4-learning-8afde.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getStoredRecipes() {
    return this.http.get('https://angular-4-learning-8afde.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
              const serverRecipes: Recipe[] = response.json();
              for (let recipe of serverRecipes) {
                if (!recipe['ingredients']) {
                  recipe['ingredients'] = [];
                }
              }

              return serverRecipes
            }
        )
        .subscribe(
          (serverRecipes: Recipe[]) => {
            this.recipeService.setRecipes(serverRecipes);
          }
    );
  }

  storeShoppingList() {
    return this.http.put('https://angular-4-learning-8afde.firebaseio.com/shopping-list.json', this.shoppingService.getShoppingList());
  }

  getShoppingList() {
    return this.http.get('https://angular-4-learning-8afde.firebaseio.com/shopping-list.json').subscribe(
        (response: Response) => {
          this.shoppingService.setIngredients(response.json());
        }
    );
  }

}
