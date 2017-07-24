import {Recipe} from "./recipe-book.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";
import {ServerService} from "../shared/server.service";
import {Response} from "@angular/http";

@Injectable()

export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();
    public recipes: Recipe[] = [];

    constructor(private shoppingService: ShoppingService, private serverService: ServerService) {
		this.setRecipes();
	}

	sendRecipes() {
    	this.serverService.storeRecipes(this.recipes);
	}

	setRecipes() {
		this.serverService.getServerRecipes().subscribe(
			(response: Response) => {
				const serverRecipes: Recipe[] = response.json();
				for (let recipe of serverRecipes) {
					if (!recipe['ingredients']) {
						recipe['ingredients'] = [];
					}
				}

				this.recipes = serverRecipes;
				this.updateRecipesArray();
			}
		);
	}

	updateRecipesArray() {
    	this.recipesChanged.next(this.recipes.slice());
	}

	getRecipe(id: number) {
    	return this.recipes[id];
	}

    getRecipes() {
    	return this.recipes.slice();
    }

	addIngredient(newIngredients: Ingredient[]) {
		this.shoppingService.addMultipleIngredients(newIngredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.updateRecipesArray();
	}

	updateRecipe(id: number, recipe: Recipe) {
    	this.recipes[id] = recipe;
    	this.updateRecipesArray();
	}

	deleteRecipe(id: number) {
    	this.recipes.splice(id, 1);
	}
}