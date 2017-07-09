import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputData: ElementRef;
  @ViewChild('amountInput') amountInputData: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();


  constructor() { }

  ngOnInit() {
  }

  onIngredientAdding() {
    const newIngredientName = this.nameInputData.nativeElement.value;
    const newIngredientAmount = this.amountInputData.nativeElement.value;
    const newIgredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.ingredientAdded.emit(newIgredient);
  }

}
