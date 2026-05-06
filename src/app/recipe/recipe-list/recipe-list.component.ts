import {Component,Output, EventEmitter} from '@angular/core';
import { recipe } from '../../shared/models/recipe.models';

@Component({
    selector : 'ea36-recipe-list',
    standalone : false,
    templateUrl : './recipe-list.component.html',
    styleUrls : ['./recipe-list.component.css']
})
 export class RecipeListComponent{
    recipeList= [
         new recipe(1,'idali sambhar',50, 'A south indian sanck for light eating', 'https://i0.wp.com/cookingwithpree.com/wp-content/uploads/2020/11/tiffin-sambar-instant-pot-instagram-6.jpg', 'Veg','venugopal iyyer','karnataka'),
         new recipe(2,'Masala Dosa', 100, 'A south indian dish usually served with patatos sabji', 'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg', 'Veg', 'ram nathan', 'kerala'),
         new recipe(3,'Chiken Tandoor', 400, 'A chiken rosted within tandoor', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzAzj4g4LWPWsR0YqWghUtkKoYf7KKRTfMnYx11LSjX8EEb6g40kjPXgdnuK51xYVNgQ&usqp=CAU', 'Non-veg','Bunty singh','punjab'),
         new recipe(4,'pasta', 120, 'A light weight snack', 'https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png.webp', 'veg','jhon doe', 'Itely')
    ];

    @Output('sendRecipeToParentRecipeComp')sendRecipeToParentRecipeComp = new EventEmitter();
    ngOnInit():void{
        console.log(this.recipeList);
        
    }
    catachRecipeFromChildItem(selectedRecipe : any){
        // console.log("look here==>>", selectedRecipe);
        this.sendRecipeToParentRecipeComp.emit(selectedRecipe);
        
    }
    // getRecipeObjUsingRecipeId(rId:number)[
    //     debugger
    // ]
}