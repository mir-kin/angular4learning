import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputData: ElementRef;
  @ViewChild('amountInput') amountInputData: ElementRef;


  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onIngredientAdding() {
    const newIngredientName = this.nameInputData.nativeElement.value;
    const newIngredientAmount = this.amountInputData.nativeElement.value;
    const newIgredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.shoppingService.addIngredient(newIgredient);
  }

}
