import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../recipe-book.model';
import {RecipeService} from "../recipe-book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[] = [];
    recipeSubscription = new Subscription;

    constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
      this.recipeSubscription = this.recipeService.recipesChanged.subscribe(
          (newRecipes: Recipe[]) => {
              this.recipes = newRecipes;
          });
  }

  ngOnDestroy() {
      this.recipeSubscription.unsubscribe();
  }

  newRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
