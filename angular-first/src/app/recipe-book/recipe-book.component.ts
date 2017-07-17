import { Component, OnInit } from '@angular/core';
import {RecipeService} from "./recipe-book.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
