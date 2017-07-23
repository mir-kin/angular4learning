import {Recipe} from "./recipe-book.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()

export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();
    public recipes: Recipe[] = [
		new Recipe('Test Recipe',
			'Test Description of Recipe',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7E54gwax5mhsoJ7O--dc2oJ9v-mfDKvfFA3gHgicxmHKKaiVkQ',
			[
				new Ingredient('apples', 5),
				new Ingredient('berry', 1)
			]
		),
		new Recipe('Test Recipe 2',
			'Test Descrition of Recipe 2',
			'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',
			[
				new Ingredient('fries', 5),
				new Ingredient('meat', 1)
			]
		)
	];

    constructor(private shoppingService: ShoppingService) {

	}

	setRecipes(newRecipes: Recipe[]) {
    	this.recipes = newRecipes;
    	this.updateRecipesArray();
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