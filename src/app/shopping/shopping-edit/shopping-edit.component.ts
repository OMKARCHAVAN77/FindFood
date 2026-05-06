import { Component, EventEmitter, Output, ViewChild,} from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'ea36-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('ingName') ingredName   : any
  @ViewChild('ingBrand') ingredBrand :any
  @ViewChild('ingPrice') ingredPrice :any
  @ViewChild('ingQuantity') ingredQuantity :any
  @ViewChild('ingUnit') ingredUint :any
  @ViewChild('ingspec') ingredspec :any
  @ViewChild('ingImage') ingredImage :any
  @Output('sendnewIngredientToParentShoppingComp')sendnewIngredientToParentShoppingComp = new EventEmitter();

  createIngredient(param: any){
    console.log(' createIngredient trigged ', param, this.ingredName.nativeElement.value);
    const newIngred = new Ingredient(this.ingredName.nativeElement.value,this.ingredBrand.nativeElement.value,this.ingredPrice.nativeElement.value,this.ingredQuantity.nativeElement.value,this.ingredUint.nativeElement.value,this.ingredspec.nativeElement.value,this.ingredImage.nativeElement.value,)
    // console.log('LOOK HERE==>>', newIngred);
    this.sendnewIngredientToParentShoppingComp.emit(newIngred);

    this.ingredName.nativeElement.value =
    this.ingredBrand.nativeElement.value =
    this.ingredPrice.nativeElement.value =
    this.ingredQuantity.nativeElement.value =
    this.ingredUint.nativeElement.value =
    this.ingredspec.nativeElement.value =
    this.ingredImage.nativeElement.value ='';
    
  }

}
