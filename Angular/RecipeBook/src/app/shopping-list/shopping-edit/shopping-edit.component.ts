import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() itemToAdd = new EventEmitter<Ingredients>();
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  constructor() {
    
  }
  onAdd() {
    this.itemToAdd.emit({name:this.nameInput.nativeElement.value,amount:this.amountInput.nativeElement.value})
  }
}
