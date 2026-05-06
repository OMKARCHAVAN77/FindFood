import { Component, Input } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'ea36-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredientList=[
    new Ingredient('Rice','india gate', 150, 4,'kg','Basmati','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9R__gIzOKIbFntGbqYM-IcmEefRpQt_nNw&s'),
    new Ingredient('Oil','Fortune', 199, 4,'Ltr','SunFlower','https://m.media-amazon.com/images/I/810bFfXtiZS._AC_UF1000,1000_QL80_.jpg')
  ];
  // @Input('catchNewIngredientFromParentShoppingComp')catchNewIngredientFromParentShoppingComp : any;

  @Input('catchNewIngredientFromParentShoppingComp') set catchNewIngredientFromParentShoppingComp(newIng : any){
  console.log('look here ==>>', newIng);
  if (newIng) {
    this.ingredientList.push(newIng);
    }
  }
}
