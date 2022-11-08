import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.mode";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {


    private recipes: Recipe[] = [
        new Recipe(
            'Avacado Toast', 
            'Awesome morning breakfast recipe', 
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ',
            [
                new Ingredient('bread', 2),
                new Ingredient('Avacado', 1),
                new Ingredient('pepper', 5),

            ]),
        new Recipe(
            'Vegetarian Burger', 
            'A carving recipe of Burger with buns, cheese and love', 
            'http://www.yummyfoodrecipes.in/resources/picture/org/Spicy-Paneer-Burge.jpg',
            [
                new Ingredient('buns', 2),
                new Ingredient('potato', 1),
                new Ingredient('cheese', 1),
                new Ingredient('onion', 1),
                new Ingredient('tomato', 1)
            ])
      
      ]; 
    
    constructor(private slService: ShoppingListService){}
    
    getRecipe(index: number){
        return this.recipes[index];
    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredietsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}