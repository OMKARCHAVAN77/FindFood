import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'ea36-recipe-details',
    standalone : false,
    templateUrl : './recipe-details.component.html',
    styleUrls : ['./recipe-details.component.css']


})

export class RecipeDetailsComponent{
    // @Input('catchSelectedRecipeFromParentRecipeComp')catchSelectedRecipeFromParentRecipeComp : any;
    CurrentSelectedRecipe : any;
    constructor(private activatedroute : ActivatedRoute){}
    ngOnInit(): void{
        this.activatedroute.params.subscribe((param: any)=>{
            console.log(param);
            
        })
    }

}