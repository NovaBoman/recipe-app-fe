import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipes: any;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRandomRecipes(2).subscribe({
      next: (result: any) => this.recipes = result.recipes
    });
  }

}
