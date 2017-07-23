import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingService {
	ingredientsChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();

	ingredients: Ingredient[]= [
		new Ingredient('Apple', 5),
		new Ingredient('Tomato', 3),
	];

	listUpdate() {
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	setIngredients(newIngredients: Ingredient[]) {
		this.ingredients = newIngredients;
		console.log(newIngredients);
		this.listUpdate();
	}

	getShoppingList() {
		return this.ingredients.slice();
	}

	getIngredient(index: number) {
		return this.ingredients[index];
	}

	updateIngredient(index: number, newIngredient) {
		this.ingredients[index] = newIngredient;
		this.listUpdate();
	}


	addIngredient(newItem) {
		this.ingredients.push(newItem);
		this.listUpdate();
	}

	addMultipleIngredients(newIngredients: Ingredient[]) {
		this.ingredients.push(...newIngredients);
		this.listUpdate();
	}

	deleteIngredient(index: number) {
		this.ingredients.splice(index, 1);
		this.listUpdate();
	}

}