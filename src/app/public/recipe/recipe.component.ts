import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipes: any;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): any {
    this.recipeService.getRandomRecipes(2).subscribe({
      next: (result: any) => this.recipes = result.recipes
    });
        
      
    }
  
}
