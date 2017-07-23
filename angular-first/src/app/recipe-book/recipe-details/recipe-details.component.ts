import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe-book.model";
import {RecipeService} from "../recipe-book.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipeSubscription: Subscription;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
          this.recipeSubscription = this.recipeService.recipesChanged.subscribe(
              (recipes: Recipe[]) => {
                this.recipe = recipes[this.id];
              });
        }
    );
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }

  sendIngredientsToShoppingList() {
    this.recipeService.addIngredient(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onRecipeDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.recipeService.updateRecipesArray();
    this.router.navigate(['/recipes']);
  }

}
