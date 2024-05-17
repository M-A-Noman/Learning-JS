import {
  Component,
  OnDestroy,
  OnInit,
  // ElementRef, EventEmitter, Output, 
  ViewChild
} from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') itemForm: NgForm;
  // @Output() itemToAdd = new EventEmitter<Ingredients>();
  // @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  editSubscription: Subscription;
  editMode = false;
  indexToBeEdit: number=-1;
  ingredientToBeEdit: Ingredients;
  constructor(private shoppingService: ShoppingService) { }
  ngOnInit(): void {
    this.editSubscription=this.shoppingService.onEditModeStart.subscribe(
      (index:number) => {
        this.indexToBeEdit = index;
        this.editMode = true;
        this.ingredientToBeEdit = this.shoppingService.getIngredient(index);
        this.itemForm.setValue({
          name: this.ingredientToBeEdit.name,
          amount:this.ingredientToBeEdit.amount
        })

      }
    )
  }
  ngOnDestroy(): void {
    
  }
  onAdd(form: NgForm) {
    // this.itemToAdd.emit({ name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value })

    // let item = new Ingredients(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    const value = form.value;
    let newItem = new Ingredients(value['name'],value['amount']);
    let oldItem =this.editMode? (this.shoppingService.getIngredient(this.indexToBeEdit)):newItem;
    this.shoppingService.onAddClicked(newItem,oldItem)
    this.editMode = false;
    form.reset();
    // console.log(item);
    // console.log(typeof(item))
  }
  checkAmount(amount: Object) {
    console.log(amount);
    // return Number(amount.value) > 0;
  }
  onClear() {
    this.editMode = false;
    this.itemForm.reset();
   
  }
  onDelete() {
    if(this.indexToBeEdit!=-1){
      this.shoppingService.onDeleteClicked(this.indexToBeEdit);
    }
    
    this.onClear();
    
  }
}
