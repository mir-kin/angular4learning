import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import {Recipe} from "../recipe-book/recipe-book.model";
import {Ingredient} from "./ingredient.model";

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeRecipes(data: Recipe[]) {
    return this.http.put('https://angular-4-learning-8afde.firebaseio.com/recipes.json', data).subscribe(
        (response: Response) => {
          console.log(response);
        }
    );
  }

  getServerRecipes() {
    return this.http.get('https://angular-4-learning-8afde.firebaseio.com/recipes.json');
  }

  storeShoppingList(data: Ingredient[]) {
    return this.http.put('https://angular-4-learning-8afde.firebaseio.com/shopping-list.json', data).subscribe(
        (response: Response) => {
          console.log(response);
        }
    );
  }

  getShoppingList() {
    return this.http.get('https://angular-4-learning-8afde.firebaseio.com/shopping-list.json');
  }

}
