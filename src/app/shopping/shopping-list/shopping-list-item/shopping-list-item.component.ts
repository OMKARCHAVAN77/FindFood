import { Component, Input } from '@angular/core';

@Component({
  selector: 'ea36-shopping-list-item',
  standalone: false,
  templateUrl: './shopping-list-item.component.html',
  styleUrl: './shopping-list-item.component.css'
})
export class ShoppingListItemComponent {

  @Input('ingredient')ingredient : any;
}
