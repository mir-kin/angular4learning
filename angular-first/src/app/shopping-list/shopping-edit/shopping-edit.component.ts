import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') ingredientForm: NgForm;
  private editingSubscription: Subscription;
  private editingMode = false;
  private editingIndex: number;
  private editingItem: Ingredient;


  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.editingSubscription = this.shoppingService.startedEditing.subscribe(
        (index: number) => {
          this.editingMode = true;
          this.editingIndex = index;
          this.editingItem = this.shoppingService.getIngredient(index);
          this.ingredientForm.setValue({
            name: this.editingItem.name,
            amount: this.editingItem.amount
              })
        }
    );
  }

  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
  }

  onIngredientAdding(form: NgForm) {
    const value = form.value;
    const newIgredient = new Ingredient(value.name, value.amount);
    if (this.editingMode) {
      this.shoppingService.updateIngredient(this.editingIndex, newIgredient);
    } else {
      this.shoppingService.addIngredient(newIgredient);
    }
    this.editingMode = false;
    form.resetForm();
  }

  onFormClear() {
    this.editingMode = false;
    this.ingredientForm.reset();
  }

  onIngredientRemove() {
    this.shoppingService.deleteIngredient(this.editingIndex);
    this.onFormClear();
  }
}
