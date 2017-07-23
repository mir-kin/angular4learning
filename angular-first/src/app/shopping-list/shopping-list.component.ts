import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "./shopping-list.service";
import {Subscription} from "rxjs/Subscription";
import {ServerService} from "../shared/server.service";

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Ingredient[] = [];
	private subscription: Subscription;

	constructor(private shoppingListService: ShoppingService, private serverService: ServerService) {
	}

	ngOnInit() {
		this.ingredients = this.shoppingListService.getShoppingList();
		this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
			(newIngredients: Ingredient[]) => {
				this.ingredients = newIngredients;
			}
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onEditItem(index: number) {
		this.shoppingListService.startedEditing.next(index);
	}

}
