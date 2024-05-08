import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  // @Output() itemToAdd = new EventEmitter<Ingredients>();
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  constructor(private shoppingService:ShoppingService) {
    
  }
  onAdd() {
    // this.itemToAdd.emit({ name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value })
    let item = new Ingredients(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.shoppingService.onAddClicked(item)
    console.log(item);
    console.log(typeof(item))
    

    
  }
}
