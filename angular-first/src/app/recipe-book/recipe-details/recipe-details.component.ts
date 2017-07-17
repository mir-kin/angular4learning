import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe-book.model";
import {RecipeService} from "../recipe-book.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
    );
  }

  sendIngredientsToShoppingList() {
    this.recipeService.addIngredient(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
