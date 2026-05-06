import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipe } from '../../../shared/models/recipe.models';

@Component({
    selector : 'ea36-recipe-list-item',
    standalone : false,
    templateUrl : './recipe-list-item.component.html',
    styleUrls : ['./recipe-list-item.component.css']
})

export class RecipeListItemComponent{
@Input('recipe') recipe: recipe |any;
// @Output('sendRecipeToParentList') sendRecipeToParentList = new EventEmitter();
constructor (private router : Router , private activatedroute : ActivatedRoute){}
onClick(){
    // // console.log("onClick trigerred",this.recipe);
    // this.sendRecipeToParentList.emit(this.recipe);
    this.router.navigate(['details',this.recipe.recId], {relativeTo : this.activatedroute})
    }
}