import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	ingredients: Ingredient[]= [
		new Ingredient('Apple', 5),
		new Ingredient('Tomato', 3),
	];
	getShoppingList() {
		return this.ingredients.slice();
	}
	addIngredient(newItem) {
		this.ingredients.push(newItem);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addMultipleIngredients(newIngredients: Ingredient[]) {
		this.ingredients.push(...newIngredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

}