import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 
    'https://www.allrecipes.com/thmb/cNYLNXoGqFrqvZJPPoCkwb-8w-4=/2000x1125/smart/filters:no_upscale():focal(1039x619:1041x621)/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg')
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
