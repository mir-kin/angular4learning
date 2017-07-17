import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingService {
	ingredientsChanged = new Subject<Ingredient[]>();
	ingredients: Ingredient[]= [
		new Ingredient('Apple', 5),
		new Ingredient('Tomato', 3),
	];
	getShoppingList() {
		return this.ingredients.slice();
	}
	addIngredient(newItem) {
		this.ingredients.push(newItem);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addMultipleIngredients(newIngredients: Ingredient[]) {
		this.ingredients.push(...newIngredients);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

}