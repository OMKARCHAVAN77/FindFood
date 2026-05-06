import { Component } from '@angular/core';

@Component({
  selector: 'ea36-shopping',
  standalone: false,
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {
  newlyAddedIngredient:any;
catchNewIngredientFromChildEditComp(newIngred : any) {
  console.log("LooK Here ==>> ",newIngred);
  this.newlyAddedIngredient = newIngred;
  
}

}
