import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";
import {Injectable} from "@angular/core";
import {ServerService} from "../shared/server.service";
import {Response} from "@angular/http";

@Injectable()
export class ShoppingService {
	ingredientsChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();

	ingredients: Ingredient[] = [];

	constructor (private serverService: ServerService) {
		this.setIngredients();
	}



	listUpdate() {
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	setIngredients() {
		this.serverService.getShoppingList().subscribe(
			(response: Response) => {
				this.ingredients = response.json();
				this.listUpdate();
			}
		);
	}

	sendIngredients() {
		this.serverService.storeShoppingList(this.ingredients);
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