import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {RecipeListComponent} from './recipe-book/recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipe-book/recipe-details/recipe-details.component';
import {RecipeItemComponent} from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingItemComponent} from './shopping-list/shopping-item/shopping-item.component';
import { DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingService} from "./shopping-list/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import {RecipeService} from "./recipe-book/recipe-book.service";
import {ServerService} from "./shared/server.service";
import {HttpModule} from "@angular/http";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ShoppingListComponent,
		RecipeBookComponent,
		RecipeListComponent,
		RecipeDetailsComponent,
		RecipeItemComponent,
		ShoppingEditComponent,
		ShoppingItemComponent,
		DropdownDirective,
		RecipeStartComponent,
		RecipeEditComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpModule
	],
	providers: [ ShoppingService, RecipeService, ServerService],
	bootstrap: [AppComponent]
})
export class AppModule {

}
